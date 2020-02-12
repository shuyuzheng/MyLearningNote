# Infrastructure as a Service (IaaS)

Cloud computing: on-demand, over the network, convenient, configurable, rapidly provisioned, minimal management effort.

Elements of cloud service
1. In-demand self-service
2. Broad network access
3. Resource pooling: pool of hardware
4. Rapid elasticity
5. Measured Service

PaaS:
CSC RAHTI, notebook.csc.fi, Google AppEngine, Heroku

IaaS: Pouta, Amazon EC2, Microsoft Azure

SaaS: Chipster, Google Web Apps, Microsoft Web Apps.

# IaaS setup:

Front-end Client (Web UI, Horizon, CLI) -> internet -> cloud Middleware (Open Stack)

ePouta: Optical Private Network(OPN) or MPLS VPN connection between the end customer and ePouta VM instance.

# Front-end client

* Web User Interface:
    * Haka
    * for administering individual VMs, keys, images, volumes

* CLI tool: https://research.csc.fi/pouta-install-client
    * for more elaborate resource provisioning and possibly some lightweight software integration

* Programming APIs: https://pouta.csc.fi/dashboard/project/access_and_security
    * For building very large systems and stacks
    * support from individual services (compute, storage) to full-fledged orchestration

# Workflow

* Access to Pouta Web UI
* Open IPv4 address - "Floading IP"
* Security group permitting access from user's computer
* Identity
    * Password(not recommended)
    * SSH-Key-Based Authentication
* SSH client software

# Hardware Options

* GPU flavor:
    * AI, Deep Machine Learning
    * Intensive 3D/video/image processing
* I/O flavor:
    * Hadoop/Spark
    * clustered Databases
* Standard Flavor
    * Normal computing and software development
    * normal app/web and content services hosting* Normal computing and software development
    * normal app/web and content services hosting* Normal computing and software development
    * normal app/web and content services hosting* Normal computing and software development
    * normal app/web and content services hosting* Normal computing and software development
    * normal app/web and content services hosting* Normal computing and software development
    * normal app/web and content services hosting* Normal computing and software development
    * normal app/web and content services hosting* Normal computing and software development
    * normal app/web and content services hosting
* HPC flavor:
    * Scientific App
    * Advanced computing and software development

# Object storage

Store data as objects:
    * Data
    * Meta data
    * identifier


