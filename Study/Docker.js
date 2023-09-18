//! Docker and Kubernetes:
//! What is Docker?
// Docker is a tool designed to make it easier to create, deploy, and run applications by using containers.

//! What is a Container?
// A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.

//! What is Server?
// A server is a computer program or a device that provides functionality for other programs or devices, called "clients". This architecture is called the client–server model.

//! What does the server consist of?
// A server consists of a physical server (Hardware), above of it operating system (OS), above of all them software that supports the server (applications and dependance).

//! NOTE => This way to host an application is is very expensive and not efficient. because we have to pay for the whole server and we don't use all of it.

//! So we use Virtualization to solve this problem.

//! What is a Virtual Machine?
// A virtual machine (VM) is an emulation of a computer system. Virtual machines are based on computer architectures and provide functionality of a physical computer.

//! NOTE => VMs not talk with hardware directly, they talk with the hypervisor layer.

//! We need to components to create a VM:
// 1- Hypervisor layer.
// 2- Management Software.

//! What is a Hypervisor layer?
// A hypervisor, also known as a virtual machine monitor or VMM, is software that creates and runs virtual machines (VMs). A hypervisor allows one host computer
// to support multiple guest VMs by virtually sharing its resources, such as memory and processing.

// we can make cluster between two sets of Vms on two Physical servers.

//! What is Cluster?
// A cluster is a group of servers and other resources that act like a single system and enable high availability and, in some cases, load balancing and parallel processing.

//! What is Management Software?
// Management software is a general-purpose software that helps to control and manage the VMs. we help me to manage devops tasks in the VMs.

//! What is DevOps?
// DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle
// and provide continuous delivery with high software quality.

// Dev the part of operations related to create the VM and install the OS in the VM. and install the dependencies and requirements.
// In Summary Dev the part related to build of VM.

// Ops the part related of VM Administration. like monitoring, start, end , backup, scaling, move this VM from physical server to another physical server.
// this part not related what is inside VM and build of VM. this related VM up, running, stoped, created, deleted, backup, restored, snapshots
//! Management software used to make this part (Ops).

//! Example: VmWare, VirtualBox, Hyper-V, KVM, Xen, etc.
// in vmware we has the hypervisor layer to do part related of (Dev) and vmware Workstation to do part related of (Ops).

//! There many types of hypervisor:
// 1- Type 1 Hypervisor. this download in ring 0 means it's after hardware directly.
// 2- Type 2 Hypervisor. this download in ring 1
// 3- There type of Hypervisor called Bare Metal Hypervisor. this downloaded in physical server directly. don't need host.
// 4- There type of Hypervisor called Hosted Hypervisor. this downloaded in OS. need host.

//! All of them there components like it's in the containers.

//! So always there comparison between VMs and Containers.