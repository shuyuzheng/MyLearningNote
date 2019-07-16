## What is OpenStack?

1. It is an open source cloud computing platform.

2. OpenStack integrated several complemental services together by using **Application Programming Interfacde(API)**

3. The solution OpenStack provided is called **Infrastructure-as-a-Service(IaaS)**

## OpenStack services

1. Service:
  1. Horizon (Dashboard): A web-based self-service portal.
  2. Nova (Compute): Manage the **lifecycle** of compute instances.
  3. Neutron (Networking): Provide **Network-Connectivity-as-a-Service** for other services.

2. Storage:
  1. Swift (Object Storage):
    * Arbitrary _unstructured_ data
    * Using RESTful, HTTP based API
    * data replication and scale-out architecture
  2. Cinder (Block Storage):
    * Persistent block storage
    * Pluggable driver architecture

3. Shared Services:
  1. Keystone (Identity Service):
    * authentication and authorization service
    * a catalog of endpoints for all OpenStack services
  2. Glance (Image service): Stores and retrieves virtual machine disk images.
  3. Ceilometer (Telemetry): Monitors and meters the OpenStack cloud for billing, benchmarking, scalability, and statistical purpose.

4. Higher-level services:
  1. Orchestration (Heat): 
    * Orchestrates multiple composite cloud applications by using either the HOT template format or the AWS CloudFormation template format.
    * Usinng OpenStack-native REST API and CloudFormation-compatible Query API.

## Architecture

1. [Conceptual architecture](https://docs.openstack.org/install-guide/get-started-conceptual-architecture.html)
2. [Logical architecture](https://docs.openstack.org/install-guide/get-started-logical-architecture.html)
  * OpenStack are composed of several **services**
  * All services have at least one **API** process.
  * Processes communicate within one service using **AMQP** message broker.
  * Service's state is stored in a database.
  * Users can access OpenStack via the **Horizon Dashboard**, **Command-line clients** and **API** requests through curl.

## Installation

The services listed above (plus database service) can be installed separately, according to your requirement.


