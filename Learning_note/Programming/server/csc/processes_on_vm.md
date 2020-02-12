# Install Docker CE run RStudio server in docker container

## Install Docker CE on your VM
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install docker-ce

## Start Docker CE on your VM
sudo systemctl start docker

Test if Docker CE is successfully started on your VM, run this Hello world test container
you should see Hello World from docker if Docker CE is running.

sudo docker run hello-world

## Run Rstudio docker container
sudo docker container run --rm -p 8787:8787 -v ${PWD}:/home/rstudio -w /home/rstudio dceoy/rstudio-server

Access Rstudio server using http://VM-IP:8787 (remember to open port 8787 for VN using Security Groups).
Default login for Rstudio server rstudio/rstudio

Pouta Cloud Course Autumn 2019
Ex. 5 Building your own Rstudio Server
Launch a CentOS-7 based virtual machine. Assign IP address, define security group that allows connection from your local machine to the ssh port (22).

Then log in to your VM and start installing Rstudio.
First update the VM.
sudo yum update
Download Rstudio rpm installation package:
wget https://download2.rstudio.org/rstudio-server-rhel-1.1.456-x86_64.rpm
Then install rstudio:
sudo yum install rstudio-server-rhel-1.1.456-x86_64.rpm
sudo yum install R
sudo rstudio-server verify-installation
To use Rsudio server you need to add a new user account, with a password, to your system:
sudo useradd Ruser
sudo passwd Ruser
The Rstudio server WWW interface uses by default port: 8787
To be able to access the server with browser running in your local machine, you must add a security group rule that allows connections to port 8787 from you local machine. Add this rule to the security group in use.

After that open browser connection to your Rstudio server:

http://ip-address-of-your-vm:8787/
and log in with the user account you just created.
Ex. 6 Installing software with Conda
Open ssh connection to a CentOS-7 based VM. Once logged in, start the installation.
sudo yum update
First add bzip2 compression tool to your system:
sudo yum install bzip2
On your local machine open the Conda home page
   https://conda.io/docs/
And there continue to:
-> User Guide -> installation -> regular installation -> Linux -> Miniconda3 installer for linux

Then copy the link for python 3.6 based linux installation file so that you can paste it as an argument for wget command in your VM. Now you can load the installation file to your Virtual Machine using wget command:

  wget https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh
and then start the installation with command:
  bash Miniconda3-latest-Linux-x86_64.sh
To use the Bioconda repositories you need to run some configuration commands: (see bioconda site in: http://bioconda.github.io/)

  bash
  conda config --add channels defaults
  conda config --add channels conda-forge
  conda config --add channels bioconda
Now you can use Conda to install software that has been ported to bioconda environment. For example bwa can be installed with:
conda install bwa
Next, browse the packages available in the Bioconda repository: (https://bioconda.github.io/recipes.html#recipes. Choose one (or several) that you find interesting and create a new Conda environmnet for this tool.
conda create -n my_env tool_name
source activate my_env
In the case of Qiime2 metagenomics toolkit the latest version is not available in bioconda repository. In stead you need to download a Conda installation file from the Qiime2 site:
wget https://data.qiime2.org/distro/core/qiime2-2018.8-py35-linux-conda.yml
conda env create -n qiime2-2018.8 --file qiime2-2018.8-py35-linux-conda.yml
# OPTIONAL CLEANUP
rm qiime2-2018.8-py35-linux-conda.yml
After the installation activate the Qiime2 environment and test qiime2 with command:
  source activate qiime2-2018.8
  qiime
Ex. 7 Installing Stacks server in Ubuntu
Stacks software pipeline includes a possibility to load the results to a MySQL database server and analyze the data with WWW interface. The computationally heavy parts can be executed in Taito, but MySQL database or web interface can not be used there.

This document contains notes how to set up Stacks environment to a Virtual machine running in the cPouta cloud environment of CSC. Running Stacks on a Virtual Machine in cPouta allows you to utilize the Stacks result database and WWW-interface.

The installation instructions in the Stacks manual are designed for Ubuntu systems, so first you should launch a virtual machine usingÂ  the most recent Ubuntu image available (Ubuntu 16.04).

When a virtual Ubuntu Machine has been launched, open a terminal connection to the virtual machine. Installing Stacks, including MySQL and web interface can be done with commands below:

sudo apt-get update
sudo apt-get install zlib1g-dev
sudo apt-get install apache2
sudo apt-get install libdbd-mysql-perl
sudo apt-get install libsparsehash-dev
sudo apt-get install gcc-snapshot -y
sudo apt install g++
sudo apt-get install mysql-server mysql-client
# above command asks you define a password for MySQL account: root.
# Define and store the password for later usage
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
#sudo apt-get install apache2-prefork-dev (ei toimi enÃ¤Ã¤)
#sudo apt-get update
sudo apt-get install php5.6 hp5.6-mysqlnd
sudo apt-get install libapache2-mod-php5.6
sudo service apache2 restart
cd
wget http://catchenlab.life.illinois.edu/stacks/source/stacks-2.2.tar.gz
tar zxvf stacks-2.2.tar.gz
cd stacks-2.2
#./configure â€“enable-sparsehash
./configure
make
sudo make install
cd /usr/local/share
sudo chown -R cloud-user stacks
cd /usr/local/share/stacks/sql/
cp mysql.cnf.dist mysql.cnf
mysql -u root -p -e "GRANT ALL ON *.* TO 'dbuser'@'localhost' IDENTIFIED BY 'dbpass'"
#the command above asks for MySQL root password that was created earlier
cd
cat > stacks.conf << EOF

Order deny,allow
Deny from all
Allow from all
Require all granted


Alias /stacks "/usr/local/share/stacks/php"
EOF
sudo cp stacks.conf /etc/apache2/conf-available/stacks.conf
sudo ln -s /etc/apache2/conf-available/stacks.conf /etc/apache2/conf-enabled/stacks.conf
sudo apachectl restart
cp /usr/local/share/stacks/php/constants.php.dist /usr/local/share/stacks/php/constants.php
In addition to the Stacks installation, you must create and take in use a "Security Group" that allows connections from your local computer to the port 80 (WWW server port) of your Stacks server.

The address of your stacks server is:

      http://ip_of_your_vm/stacks/
What the procedure above is still missing is the storage space for the data. By default the VM:s have less than 100 GB storage space available and often Stacks data requires more space. Larger storage space can be achieved by using data volumes.

Adding a data volume to a virtual machine running in cPouta is described in the Chapter 4.2 of the cPouta user guide and in demonstration video 3.

After mounting the volume to the virtual machine you can then configure the MySQL server to use the attached volume for storing the database files.

For example, if we have mounted the data volume to directory "/media/volume" we can stop the MySQL server and move the MySQL files to use the volume with commands:

sudo /etc/init.d/mysql stop
sudo cp -R -p /var/lib/mysql /media/volume/mysql
After that the datadir variable in the mysql configuration needs to be changed to point to the new location ( /media/volume/mysql) in stead of the default ( /var/lib/mysql ).

Datadir variable is normally located in file /etc/mysql/mysql.conf.d/mysqld.cnf or /etc/mysql/my.cnf When the files have been copied and configuration updated, restart the mysql server:

sudo /etc/init.d/mysql restart
