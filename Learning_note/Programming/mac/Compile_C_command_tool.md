# Enable C++ packages compiling under Mac system

## Problem 1: Can not compile R package from source under macOS

### Solution

Install "Command Line Tool" for Xcode. There are three ways to do this:

1. Install `Xcode` from Apple store and then install `Command Line Tool` with GUI. 

**Failed**: I can not use Apple store on Mac provided by university.

2. Download `Command_Line_Tools_macOS_10.14_for_Xcode_10.2.dmg` file from https://developer.apple.com/download/ (It requires Apple Developer ID)

**Failed**: I can not open the downloaded `.dmg` file. It seems an "non mountable file".

3. Using command line to install

```bash
xcode-select --install
```

**Succeed**

## Problem 2: 'stdlib.h' file not found

### Solution

It is because that `clang` compiler is seeking for a folder `/usr/include/`, while this folder does not exists. (It seems that Xcode no longer create this directory automatically.) We have to manually soft link the `include` folder under `Xcode` path to folder `/usr/include/`. Following is the command line:

```bash
sudo ln -s /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.8.sdk/usr/include/ /usr/include/
```

## Problem 3: lm: /usr/include: Operation not permitted

### Solution

It is caused by the [Configuring System Integrity Protection](https://developer.apple.com/library/mac/documentation/Security/Conceptual/System_Integrity_Protection_Guide/ConfiguringSystemIntegrityProtection/ConfiguringSystemIntegrityProtection.html). When SIP is enable, system will not allow users (even root users) to edit some of the system files.

1. Checking the status of SIP:

```bash
csrutil status
```

If the result shows that `System Integrity Protection status: enabled.` It means that the SIP is on and we should turn off it before run the command line in _Problem 2_.

2. Disable the SIP:
  1. Boot to "Recovery OS": restarting mac and holding down the `Cmd + R` during rebooting.
  2. Launch Terminal: Click `Utilities --> Terminal`.
  3. Type `csrutil disable` and run.
  4. Reboot the system by typing `reboot`

3. Run command line in _Problem 2_ to create the soft link
4. Enable the SIP (It is recommended that to turn on the SIP to keep your system from dangers.). The process is same as _step 2_, except that using command `csrutil enable`.


