Application programming interface: allows one piece of software to interact with another piece of software.

Public APIs:
* Open to the internet
* They might require authentication (token)

Internal APIs:
* Open only to your organization
* Protected by network, access control, ect
* Used by company's apps and microservices

Partner APIs:
* Shared by organization partners
* It's lying between public and internal APIs

## Types of API

* RESTful
  * Use HTTP functions: GET, POST, DELETE, BATCH, PUT
* GraphQL
* gRPC

Python request library

requests.get(url, params=parameters)

async IO
https://realpython.com/async-io-python/

axio for NODE.js


Many APIs have an SDK available, such as: AWS SDK


## Design principle

* strive for easy testability
  * separate concerns
  * write pure function
* facade pattern
  a facade is an object that serves as a front-facing interface masking more complete


## Testing
* Unit tests ensure that individual components of the app works as expected
* Integration tests
* Functional tests

1. don't nock what you don't own
2. Mock
  * external libraries
  * your own modules
3. dependency injection
4. unmock
