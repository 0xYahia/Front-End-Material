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

//! We can make template for VMs to make it easy to create VMs.
// for example we can make template for VMs with name nodejs-template. this template has nodejs and npm and all dependencies and requirements.
// or make template for DBs with name db-template. this template has DBs and all dependencies and requirements.

//! So we invest the time to make templates for VMs with all configurations and dependencies and requirements we need it and export it. to make it easy to create VMs.
// then we can import this template and edit the configurations and dependencies to be more specific to our project.

//! But in this case we need to human with skills to do this work. and this is not efficient.

//! I need to solution without strict to know the OS and installation and configurations and dependencies and requirements. and VMs don't give me this solution.
// If want to make this with VMs i need to make templates for everything. and this is not efficient.

//! And the big problem in VMs is the OS in all VMs and all Templates is the same. and this is not efficient.

//! The OS consists of two parts:
// 1- Kernel. this the core of OS. this the part that talk with hardware directly. //! (called kernel mode)
// 2- User Space. this the part that talk with kernel. and this the part that we use it. //! (called user mode)

// In our case we don't need of user space. we need only kernel. because we need only the part that talk with hardware directly.
// so of i make out application talk with kernel of host OS directly. without need of VMs OS. this will be more efficient.

// All of containers need to one kernel to run. and this kernel is the kernel of host OS. so we replaced used full OS in VMs with kernel of host OS.
// and this is very efficient.
//! What is the advantage of this solution?
// 1) by using this way i don't need to licensing for every VMs and the OS on this VMs, because i use the kernel of host OS.
// 2) not there services attack because i don't use the user space of OS. i use only the kernel of OS.
// 3) I don't need to install OS in every VMs. and make the setting configurations and dependencies and requirements.

//! How can i do this?
// We make Base Disks.
// Base Disk is the Parent VM. for example the VM to our web template.
// I will make this VM to be ready to use. via install the OS and make the setting configurations and dependencies and requirements. then our application.
// this VM has Virtual Hard Disk (VHD). in Hyper-V is file with extension .vhd this called base disk or base image.
//! If want create copy from this VM i can make it by two ways:
// 1) i can make copy from this VM via copy the VHD file. and this called (copy on write). but this not efficient
// 2) i can make copy from this VM via depend on this VHD file, and make another VHD file called (Differencing Disk). and this called (copy on read).
// with our differencing settings and configurations and dependencies and requirements. and this is very efficient. and this file with extension .AVHD
// so the new VM will be the child VM. and the parent VM will be the base VM.

//! So the disk of child VM is collection of two disks:
// 1) Base Disk on top of it the child disk.
// 2) Differencing Disk.

// If i make snapshot from child VM. this snapshot will be the child VM. and the child VM will be the parent VM. and the parent VM will be the base VM. and i can revert

//! NOTE => VMs need to kernel and my be need to some services of user mode but sure not need to all services of user mode.

// so the main idea we make container above of kernel to complete the kernel to add the OS specification we need it.
// and above of the OS there layers for requirements and above of them layer for our application.
// in this case we don't need to all services of user mode. we need only the services we need it. and i can't don't it in the ordinary VMs.

//! There way is very similar to the way of containers via layers.

//! After we make the container is ready to copy it. via install all layers we need it until our application this called (Image) and image be read only.
// and this image like VM template.

// containers   ------  build  -------> Image                  //! When we convert container to image this process called (build)
// running VM   ------  export -------> VM template            //! When we convert VM to template this process called (export)

// Image        ------  pull   -------> containers             //! When i take from image to create container this process called (pull)
// VM template  ------  import -------> running VM             //! When i take VM template to be running VM this process called (import)

//!----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Introduction to Docker:
//! What is Docker?
// Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. its a technology to create containers.
// like VMs technology to create VMs.

// There Two types of containers:
// 1) Linux Containers (LXC). this containers for Linux OS.
// 2) Windows Containers. this containers for Windows OS.

// But there three version from docker software Linux, Windows, Mac.


//!----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Docker Commands:
// docker version => to get the version of docker.
// docker info => to get the information about docker.
// docker container run -it alpine:latest sh => to run container from image alpine:latest and enter to it (interactive with terminal mode) run sh command.
// hostname => to get the name of container.
// cat /etc/*release* => to get the information about OS of container.
// exit => to exit from container.
// docker container ls -a => to get all containers (running and stopped).

// docker container run -it node:latest sh => to run container from image node:latest and enter to it (interactive mode) run sh command.
// then i can write any code in nodejs and run it.
// docker image ls => to get all images.

// docker container -d -p80:80 nginx:latest => to run container from image nginx:latest and run it in background (detached mode)
// and map port 80 in host machine to port 80 in container. //! so anything in port 80 in host machine will be forward to port 80 in container.

// curl http://localhost:80 => to get the response from container.
// docker container stop <container id or container name> => to stop container.
// docker container ls => to get all running containers.