## Cloud Delivery Models

### IT Full Stack

<img src="./img/01.png">

### On-Premises Model

- All the resources there are in the client management.

### Infrastructure as a Service (IaaS)

- The provider offers the infrastructure [Network, Storage, Servers, Virtualization, OS].
- The client manages the [applications, data, runtime].

### Platform as a Service (PaaS)

- The provider offers the platform [Network, Storage, Servers, Virtualization, OS, Middleware, Runtime].
- Tje client manages the [applications, data].

### Software as a Service (SaaS)

- The provider offers the software [Network, Storage, Servers, Virtualization, OS, Middleware, Runtime, Data, Applications].
- The client manages nothing.

<img src="./img/02.png">

### What is Region?

- A region is a geographical area where AWS has a data center. and every region has multiple availability zones. minimum 3 AZs.

### What is Availability Zone?

- An availability zone is one or more data centers with redundant power, networking, and connectivity in an AWS region.

### What is Global edge locations?

- Global edge locations are CDN (Content Delivery Network) endpoints for CloudFront. They are used for caching content. to reduce latency.

### What is AWS Local Zones?

- AWS Local Zones place AWS compute, storage, database, and other select services closer to large population, industry, and IT centers. and connected to nearest AWS region.

**Example: why there Local Zone**

- To serve application it's has sensitive data and need to be close to the user like financial application.

### What is AWS Wavelength?

- AWS Wavelength is an AWS infrastructure deployment that places compute and storage services at the edge of telecommunications providers' 5G networks. This allows developers to build applications that require ultra-low latency. until from Local Zone.

### What is AWS Regional Services?

- AWS Regional Services are services that are accessed from within a specific region. These services do not go over the public internet.
