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
// sudo getent group docker => to get the group docker.
// sudo usermod -aG docker ${USER} => to add the current user to group docker.
//! pull image from docker hub:
// docker image pull <image name> => to pull image from docker hub.
//! create container from image i pulled from docker hub:
// docker container create -it <image name> bash => to create container from image and interactive with terminal mode and run bash command.
//! start container:
// docker container start <container id or container name> => to start container.

//! If i exit from terminal of container this will stop container. and container be with status exited.
//! Container == application.
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Container = Application
// docker container run => like docker container create and docker container start and docker image pull if the image not exist.
// docker container run -it python => to run container from image python and interactive with terminal mode.
//! NOTE => If i write exit() this will logout from python and exit from container.
//! this mean the container is a bundle from the application and all dependencies. and the goal from the container is run one process only.
//! if this process is terminated the container will be terminated.

//! The difference between VM and container:
// in VMs we have the OS and the application and the dependencies and the requirements. so i can run many processes in VMs. and can use OS services.
// but container bundle the application and the dependencies and part from the OS. so if i exit the application the container will be terminated.


// container == application
// container == command bash if command bash is exist the container will be terminated.

// So if i entered in bash in container and run ps i founded the process of bash with PID 1. and this mean if i exit from bash the container
// will be terminated. the process with PID 1 is the main process in container. and if this process is terminated the container will be terminated.

//! But i can run python in bash in container in this case python if i exit from python the container will not be terminated. and return to bash.
//! because python is not the main process in container. the main process in container is bash.

//! To delete container:
// docker container rm <container id or container name> => to delete container. i can delete more than container in one command.
//! To delete image:
// docker image rm <Image id or image name> => to delete image. i can delete more than image in one command.


//! NOTE:
// when we delete image we delete all layers of this image. but when we delete container we delete only the container. and the image will be exist.
// and recommended don't squash this layer to be one layer
// because if i want install image this image if there layer in this image already exist in my machine in another image it will be used.
// and and don't download this layer this will be more efficient.
// but if i squash this layer in one layer the identity (Hash) of this layer will be changed.
// so if i download another image with this layer it will be downloaded again.
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Docker Engine:
// Docker Engine consists of three main parts:

//! 1) Docker Daemon:
// this the service side of docker this make container talks with kernel, and take the commands from Docker client. and work with it
// if this command related to container daemon will pass this command to container d
//! 2) Container d:
// when container d take the command from daemon if this command to create or run container container d will execute run c
//! 3) Run c:
// run c is the run time for container every container was created opposite it process run c
// and run c is responsible to do all things related to container like start stop delete etc.

//! NOTE:
// we have one docker daemon and one container d in every machine. but we can have many run c to each container.

//! NOTE:
// there process called (shim) this process inherited something from container d and run c to separate dependency of container to run c and container d
// and docker daemon so if a stoped container d or docker daemon this will not affect on container.


// ps -elf | grep docker => to get the process of docker. we see the process of docker daemon
// ps -elf | grep containerd => to get the process of containerd. we see the process of container d

//! API or Docker daemon API:
// listen to:
// /var/run/docker.sock => on Linux
// //./pipe/docker_engine => on Windows

// if container take access for this path to docker client pass command to docker daemon.

//! By default docker daemon listen to 2375/tcp and listen to http protocol. and this not secure.

//! There way to make docker daemon listen to https protocol and this secure. (search about it)
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Images - Deep Dive:
// image is a package application or bundle application
// image contain all layers or files start from files above the kernel
// image contain description file or build file and layers
// layers or physical layers are contain actual files
// build file or description file is called build time

//! Any command i do it when build creation of image this called build time
//! Any command i do it when run container from image this called run time

//! When i pull image it get it from registry and by default docker.hub.com is the default registry
// docker hub consists of many repositories and every repository consist of many images (version of image)
// example there repository called ubuntu and this repository consist of many images (version of image) like ubuntu:latest ubuntu:18.04 ubuntu:16.04
// When we use git and we commit changes there change we commit called it tag. and this tag is the version of this commit.
// in docker the tag is the version of image. and the default tag is latest or write :latest after image name. and image name is the repository name.
//! Image name = <repo name>:<tag>
// example: ubuntu:20.04
// example: python:3.8.5

//! In repository we have many images (version of image) and every image consist of many layers there image for linux and image for windows
//! and there images for different architectures like x86 and arm64 and there images for different OS like linux and windows
//! but not copy images all images has the base image but the difference between them is the layers above of base image

//! all images in Manifest list and this list consist of many Manifests and every Manifest consist of many layers
//! So for example when i pull image python it looks for my OS and my architecture and get the Manifest for my OS and my architecture

// jps => to get all daemon process running in java machine
// ip addr show => to get the ip address container take it from host machine

// hdfs dfs -ls hdfs://localhost:9000 => to get all files in hdfs
// hdfs => hadoop distributed file system //! (the file system of our container)

// docker image inspect <image name or image id> => to get the information about image
// docker image history <image name or image id> => to get the history of image
// docker container inspect <container name or container id> => to get the information about container
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Docker in VSCode:
// docker image ls -q => to get all images id
// docker image rm $(docker image ls -q) => to delete all images
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Container - Deep Dive:
// A container is the runtime instance of an image
// container for image like run VM for template

// docker container run <image name> <application name> => to run container from image and run the main process of application
// docker container run -it ubuntu /bin/bash
// docker container run -it alpine:latest sleep 10

// docker container stop => to stop container
// docker container start => to start container
// docker container rm => to delete container
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Container Lifecycle:
//! Self-healing containers with restart policies:
// Restart policies are applied per-container, and can be configured imperatively on the command line as part of docker container run commands,
// or declaratively in YAML files for use with higher-level tools

//! Always
// container will always restart if the main process is killed from inside the container but won't restart if you manually stopped it.
// Will restart if the Docker daemon restarts.
//! Unless-stopped
// container will always restart if the main process is killed from inside the container but won't restart if you manually stopped it.
// However will NOT restart if the Docker daemon restarts.
//! on-failue
// container will always restart if the main process exits with non-zero code (i.e. with error) but won't restart if you manually stopped it.
// However will restart if the Docker daemon restarts.

// docker container run --name <container-name> --restart <policy> <image-name> <process>
// docker container run --name my-always-restart --restart always alpine /bin/bash

//! Web server example:
// docker container run -d --name web-server -p 80:80 nginx:latest
// -d => detached mode
// -p 80:80 => map port 80 in host machine to port 80 in container

//! SQL server example:

// docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=P@ssw0rd" -e "MSSQL_PID=Express" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2019-latest
// -e => environment variable
// -p 1433:1433 => map port 1433 in host machine to port 1433 in container
// -d => detached mode
// mcr.microsoft.com => microsoft container registry
// mssql/server:2019-latest => repository name and image name

// docker container rm $(docker container ls -aq) -f => to delete all containers if it running
// docker image rm $(docker image ls -q) -f => to delete all images if there container attached to it
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Network:
// To copy file from host machine to container:
// docker container cp <file path> <container name>:<path in container>

//!Example:
// docker container rut -it python:latest
// import os => to import os module
// os.listdir() => to get all files in container
// os.listdir('/tmp') => to get all files in container in path /tmp
// []

//! In another terminal:
// docker container cp /Study/Docker/file.py <container id or container name>:/temp/file.py

//os.listdir('/temp')
// ['file.py']
// exec(open('/temp/file.py').read())
// 'Hello from Python container!'

//! NOTE:
// in this way to communication if i change the file in host machine this will not affect on container.
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! To make container communicate with another container:
//! Example:
// make container from nginx
// docker container run -d --name web -p 80:80 nginx:latest
// make container from centos
// docker container run -it --name centos centos:latest
// in centos container interact with terminal mode we talk with nginx container
// curl http://web => i get error Could not resolve host: web
// but if i talk with IP address of nginx container i get response
// curl http://172.17.0.2 => i get response from nginx container

//! To make centos container talk with nginx container via name of container:
// when we create container from centos we add --add-host <name>:<ip address> in command
// docker container run -it --name centos --add-host web:172.17..0.2 centos:latest

// ip link show => to show all interfaces in container
// ip addr show => to get the ip address of container

//! NOTE:
// With each container i create it docker create virtual adapter in host machine and this adapter has ip address to make container
// can communicate with host machine and another container in host machine.

//! By default docker create with three networks:
//! 1) Bridge network:
// this network is default network. and this network is private network. and this network is internal network.
//! 2) Host network:
// this network expose all the container and make container communicate with host machine. make container work like a host machine.
// and will clean all network adaptors in host //! and this is special case to use it.
// it's make me can i create container and work with files in container without need to map port.
//! Example:
// container run -d --name web --network host nginx
// In this case if i go to browser and write localhost i will get response from nginx container. without need to map port.

//! 3) None network:
// this network make container not communicate with any thing. is isolated network.
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! By default if i crete network it ask me to choose the driver of network.
//! And by default the localhost (single host) has three types of drivers:
// 1) Bridge driver: this driver carry bridge network. //! in windows this driver called nat driver.
// 2) macvlan driver: by default this driver act as layer 2 make container act as physical device in network.
// 3) overlay driver: this driver make container communicate with another container in another host machine. (in multi host docker)

// docker network ls => to get all networks
// docker network create <network name> => to create network
// docker network connect <network name> <container name> => to connect container to network
//! By default when i create network will be in subnet 172
// bu i can change this subnet via add --subnet <subnet> in command
// docker network create --subnet 10.0.0.0/16 <network name>
// docker disconnect <network name> <container name> => to disconnect container from network
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! We can add switch when we create network to make containers in this network can communicate with containers in the same network
//! but can't communicate with containers in another network and can't communicate with the network

//! NOTE:
// all containers in bridge network can communicate with each other. but can't communicate with containers in another network (another host).
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Network in docker build on open standard called CNM (Container Network Model)
// implementation of this standard is called libnetwork this is library in docker
// components of network founded in container like we see.

//! When we install docker engine by default download interface called docker0
// this interface who is can interface the containers in bridge network.

//! Every each container meant it  virtual eth created in host.
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Service discovery:
// if i have network inn docker host and this network attach on it names containers (containers with names) inn docker engine like name resolution service
// like DNS service in small scale to make containers can communicate with each other via name but this work between containers and each other
// and between containers and names and each other if i this have network.
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Container Volumes - Storage:
// if i storage data in container and this container is terminated this data will be lost.
// so we need to storage data out of the container in this case if container is terminated this data will not be lost.

//! There two types of data:
//! 1) none-persistent data:
// this data will be lost if container is terminated.
// example: like we do it when we copy file.py from host machine to container.
// we know image is a set of layers. and every layer is collection of files is read only.
// when we take container from image this container add layer above of image layer. and we storage the data, write, copy, and logs in this layer.
// life this layer is the life of container. this layer is none-persistent data. and this layer will created as folder in docker host.
// and as long asa container is life whether running or stopped this layer is life, but if container is terminated this layer and this folder will be deleted.
//! 2) persistent data:
// this data will not be lost if container is terminated.
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
// To enter to placed docker maintain the image, layers image, and storage of container
// sudo -i
// cd /var/lib/docker
// ls
// we founded many folders:
// buildkit  containers  image  network  overlay2  plugins  runtimes  swarm  tmp  trust  volumes

// overlay2 => this folder is storage drivers this make docker can represent container to out storage
// this overlay is different from divers overlay in network

//! NOTE:
// when we change anything in the container In fact, it is about directory in docker host, container can access this directory host and make this changes
// and this is read and write layer, butt if we terminate container this folder will be deleted. so we say life this layer is the life of container.
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! How to make data persistent? (doesn't lost if container is terminated)
//! 1) Bind mount: This is the fast way to make data persistent.
// this is the way to make file from docker host we can see it in container and make changes in docker host automatically will be reflected in container
// like mount in linux.
//! How to make bind mount?
// docker container run -it -v <path in host>:<path in container> <image name> <process>

//! 2) Docker Volume: This is the recommended way to make data persistent.
// docker create volume <volume name> => to create volume in path /var/lib/docker/volumes
//! to make container use this volume:
// docker container run -it -v <volume name>:<path in container> <image name> <process>

//! NOTE:
// in volume in path /var/lib/docker/volumes we can mount it in any external volume in don't must be in docker host my be refer to san or nas or cloud driver
//! We can make more than container can read and write in the same volume
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! How to build container to Image?
// we prepare the container with all dependencies and requirements and configurations and settings and application. to be ready to use. then we convert it to image.
// docker commit <container name> username/image-name:tag

// then we can take container from this image and run it. and we can push this image to docker hub.
//! NOTE:
// this way not better way to build image, because if someone want change anything in this image he will have to take container from this image and make changes
// then convert this container to image. and this not efficient. so this way not optimal way to build image.

//! To build this image there steps we should do it like install flask and vim
//! We can use instructions files inside it orders instruction to tell docker engine what should do it when build the same image without need to download image
//! and create container and make updates and convert this container to image. and this instruction files called Dockerfile.
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Containerizing an Application:
//! FROM: python:latest
// => FROM instruction to know docker when build image what image should use it as base image (starting point)

//! WORKDIR: /app => will create new layer in image
// => WORKDIR instruction to know docker when build image make change directory to directory i want to work in it
// and if this directory not exist in image docker will create it

//! COPY: requirements.txt . => will create new layer in image
// => COPY instruction will copy any content from the directory i stand in it to directory i want to work in container
// directory i stand in it means directory where Dockerfile in it and this directory called build context
// will copy requirements.txt from build context to . dot is current directory in container and this directory is /app

//! RUN: pip install -r requirements.txt => will create new layer in image
// => RUN instruction to run command in container when build image and this command is pip install -r requirements.txt
// i can run command pip install -r flask directly but this not efficient because not recommended to edit image directly
// so i can make file called requirements.txt and put all dependencies and requirements in it and run command pip install -r requirements.txt
// this way make my image more efficient and more optimal and modularization

//! COPY: hello.py .  => will create new layer in image
// => COPY instruction to copy file from build context to . dot is current directory in container and this directory is /app

//! EXPOSE: 5000 => will edit in metadata of image
// => EXPOSE instruction to expose port 5000 in container

//! CMD: python hello.py => will edit in metadata of image
// => CMD instruction to run command when run container from image and this command is python hello.py
// this command doesn't execute when build image. this command execute when run container from image
// this is the first and only command will execute when run container from image
// If there instruction don't execute when build image this command don't be born inside image itself will be in metadata of image
// but instruction change on layers or file system of image will make more layer in image
//! WORKDIR => don't edit in layers but if workdir edit in directory will be edit in layers

//! So we found four layers different between python image and my image

// docker build -t username/image-name:tag . => to build image from Dockerfile
//! The difference between build image from Dockerfile and commit container to image:
// when build image from Dockerfile docker will create container from image and every instruction in Dockerfile will be create layer in intermediate container
// and this layer will be commit to image. and this container will be deleted. and so on until finish all instructions in Dockerfile.
// but when commit container to image docker all changes in read and write layer (graph driver) so i create one layer only.

//! NOTE:
// When we build image using Dockerfile if we inspect container we founded CMD instruction in container. but if we commit container to image we don't founded CMD instruction in container.
// and we founded ExposePorts in inspect of container in both cases.

//! If we change any files in directory we should build image again. because docker will not know this change. and this change will not be reflected in image.

//! You should focus you build image or run container (build time or run time) on the main process of application. and this process should be the last process in Dockerfile.
//! And you should focus when docker build work is build containers and remove it, so every each remove container you should if you need anything from the old container
//! you should copy it from old container to new container.
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Dockerfile - Deep Dive:
//! FROM:
// FROM instruction is changed in intermediate container. mean make new layer, and this layers is the layer it pulled it from image you told it in FROM instruction.

// We can use FROM to specify the base image for our own image. via more than way.
// FROM <image>
//! FROM python
// FROM <image>:<tag>
//! FROM ubuntu:18.04
// FROM <repository>/<image>:<tag> (none official image)
//! FROM asami76/hadooopp-psedudo:v1.0
// FROM <image>@<digest> to sure the image is not changed (we can use it with none official image)
//! FROM python@sha256:25a976dc387d01af6cb8c419a03e4b553d88ac5152d250920c94553e24cad3c7
// If i pull image from registry, not docker hub, i must specify the registry url
//! FROM mcr.microsoft.com/mssql/server:2019-latest
// If i pull from private registry, i must specify the username and usually we write port
//! FROM private-registry.somecompany.com:5000/someimage
// Image from scratch without any base image without any layers
//! FROM scratch

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// WORKDIR COPY ADD
// WORKDIR will change the current working directory or directory will build on it to the specified directory in the image
// and if this directory not exist, it will create it.
//! WORKDIR /app
// If we have subdirectory and we don't give it path, it will be considered as subdirectory of the current working directory
//! WORKDIR subdir
// the final result will be /app/subdir

// copy hello.py from the current directory to the /app directory in the image in file hello.py (this called shell mode) as we write command in shell
//! COPY hello.py /app/hello.py
// copy all files from the current directory to the /app directory in the image make sure write / at the end of the path to told docker that it is directory not file
// if you don't write / at the end of the path, it will be renamed files
//! COPY hello.py startup.sh /app/
// we can use wildcards to copy files
//! COPY *.py /app/
// copy all files from the current directory to the /app directory in the image and if the directory not exist, it will create it
//! COPY . /app/
// if we file names have space, we can use double quotes in square brackets and write directory name in the end (this called exec mode) as we write instructions
//! COPY ["name with space.py", "name with space2.py", "name with space3.py", "/app/"]

// If you want ignore some files or directories, you can use .dockerignore file like .gitignore file and you can using the same syntax
// Dockerfile* *.pyc !important.pyc (! to ignore ignore file)
// ignore all files with .pyc extension except important.pyc file

// ADD instruction is like COPY instruction but using to copy file not exist in build context to image
//! ADD <url> /app
//! ADD <tar archive> /app
//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//! Shell
// SHELL [ "/bin/bsh", "-c" ]
// To change the default shell to run commands in the image from /bin/sh to /bin/bash (from standard shell to bash shell)
// SHELL [ "/usr/local/bin/python", "-c" ]
// if your component has interactive shell, you can use SHELL instruction to change the default shell to interactive shell like python

//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//! RUN command make intimidate container (means make a new layer)
// RUN instruction is used to execute commands in the image default shell is /bin/sh, if you want to change it, you can use SHELL instruction before RUN instruction
// NOTE => RUN instruction doesn't receive any input from user
// RUN <command> <arg1> <arg2> ... (shell mode)
// RUN apt-get update
// RUN ["executable", "param1", "param2", ...] (exec mode)
// RUN [ "apt-get", "update" ]
// RUN echo "This is a line" > /temp/file
// RUN echo "This is another line" >> /temp/file
// RUN cat /temp/file
// NOTE => the execution of RUN instruction will be in output of docker build command, so it useful to use it for debugging
// RUN fin / -name "python*" | wc -l
// RUN pipe install flask numpy
// RUN apt update && apt upgrade -y
// RUN java -version
// RUN apt install wget vim openssh-server -y

//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//! Metadata
//! ENV instruction is used to set environment variable in the image and this variable will be available for all intermediate containers
// we doesn't declear it via export command because if we do that, it will be removed when the shell session is closed
// ENV <key> <value> if we declear one variable
// ENV SQL_SA_ACCOUNT "sa"
// ENV <key1>=<value1> <key2>=<value2> ... if we declear more than one variable
// ENV SQL_USER=sa SQL_PASSWORD="P@ssw0rd" SQL_DB="master"
// all environment variables in base image in from instruction it will be inherited to the new image
// path variable mean all environment variables we take it from base image and add it to the new image
// ENV PATH $PATH:/app
// brase mode
// ENV PATH="/usr/local/hadoop/bin:${PATH}"
// this mean add /usr/local/hadoop/bin to the current path variable
// ENV EMPTY ""
//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//! USER instruction is used to change the user in the image to make user is not root
//! Example
// FROM ubuntu:latest
// RUN groupadd hadoop & useradd -g hadoop hduser
// USER hduser
// RUN id
// the output will be uid=1000(hduser) gid=1000(hadoop) groups=1000(hadoop)
//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//! There some of instructions doesn't edit anythings in the image, it just provide some information to docker like LABEL
// LABEL
// LABEL maintainer="Mohamed Yahia"
// LABEL description="This is a test image"
// LABEL version="1.0"
// LABEL is_dev="true"
//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//! ENTRYPOINT instruction is used to specify the default command to run when the container is created you can see cmd in inspect
//! ENTRYPOINT <command>
// ENTRYPOINT ["/bin/bash", "-c"]

// CMD instruction is used to specify the default arguments to the ENTRYPOINT instruction
// CMD <arg1> <arg2> ...
// CMD ["<args for entrypoint>"]

// NOTE => some commands doesn't work good with entrypoint but it work good with CMD.
// NOTE => anything related to metadata like ENV, ENTRYPOINT, CMD, we can override it when we run the container
// NOTE => you can use cmd to execute more than one command in the same time

//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//! ARG instruction is used to specify the arguments that we can use it in docker file and when we build the image
// ARG <name>=<default value>
// ARG PYTHON_IMAGE_NAME=python
// ARG PYTHON_IMAGE_TAG=3.8.0
// ARG SQL_SA=saARG SQL_PASSWORD=P@ssw0rd // we will talk about it later
// FROM $PYTHON_IMAGE_NAME:$PYTHON_IMAGE_TAG

//! If there long part from build already exist in official image use official image as base image and add your part to it
//! but don't use official image if security team doesn't allow it

// docker image push <username>/<image name>:<tag>
//! I write image name without user name docker think this is official image
//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//! Docker Registry:
// docker login => to login to docker hub
// docker logout => to logout from docker hub
// docker tag <image name> <username>/<image name>:<tag> => to tag image
// docker image push <username>/<image name>:<tag> => to push image to docker hub
//! NOTE: if don't write tag docker and i have more than version of image docker will push all version of image
//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//! Docker Compose
//! IF we have application for example web application
// this application consist of many components like front end component, authentication component, database component, etc.
// each component called service and each service consists of small components if we gather this small components
// we will build our application this small components called microservices
// and each microservice it's about of container
//! So th service it's about of microservice or more and all of them is identical or almost identical
//! Service it's about of container or more identical container each container called microservice

//! Monolithic application: this application consist of one component and this component is a main service
//! Microservices application: this application consist of many components and each component is a service
//! The benefits of microservices application:
// 1) Easy to scale
// 2) Easy to maintain
// 3) Easy to update
// And if one service is down, the other services will be up and the application will be up

//! Service in docker consist of:
// 1) container + configuration + setting on build in image
// 2) Network and driver he work on and port he work on
// 3) Storage

//! Docker Compose:
// is a tool for defining and running multi-container Docker applications. It allows you to use a simple YAML file to define the services, networks, and volumes
// that make up your application stack and then start and manage all of these services as a single unit. Docker Compose is particularly useful for orchestrating complex,
// multi-container applications that consist of multiple interconnected services.

//! Key features and concepts of Docker Compose:
//! 1) Docker Compose File: You define your application stack using a docker-compose.yml file:
// This file specifies the services your application needs, the Docker images to use for those services, environment variables, volumes, ports, and other configuration options.

//! 2) Service Definitions:
// Each service defined in the docker-compose.yml file represents a containerized component of your application, such as a web server, a database, an API, etc.

//! 3) Networking:
// Docker Compose automatically creates a network for your application, allowing services to communicate with each other by their service name.
// You can also define custom networks for more advanced network configurations.

//! 4) Volume Mounts:
// You can define shared volumes that allow data to persist between containers or be shared among them. This is useful for databases and other stateful applications.

//! 5) Environment Variables:
// Docker Compose allows you to set environment variables for your services, making it easy to configure and customize each container as needed.

//! 6) Scaling:
// You can specify the number of containers for each service, enabling you to scale services up or down as required. This is particularly useful for load balancing and high availability.

//! 7) Dependency Management:
// Docker Compose can manage dependencies between services, ensuring that services start in the correct order. For example, a web application might depend on a database being ready before it starts.

//! 8) Command-Line Interface (CLI):
// Docker Compose provides a command-line interface (docker-compose) for managing your application. You can start, stop, rebuild, view logs,
// and perform other actions on your application stack using this CLI.

// In Summery Docker Compose simplifies the process of deploying and managing multi-container applications, making it easier for developers to work with Docker in a development and testing environment.
// It's particularly useful for local development and testing, as you can define your entire application stack in one configuration file and spin up the environment with a single command.
//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//! Docker Compose File:
// docker-compose.yml file is a YAML file that defines the version, services, networks, and volumes for your application. all this called top-level keys
// yml file is a file like json file but with different syntax and this file is a configuration file

//! version: '3.7'
// services: is a selection of version compatible with docker-compose version on my machine (3.7)
// and this is the only key that is required to be present in the file

//! services:
// services: is a container or more than one container are participating in network communication and storage
  //! web-fe:
  // web-fe: is the name of the service this mean there container or more than one container called web-fe
    // build: .
    // build: is the path to the Dockerfile that will be used to build the image
    // command: python app.py
    // ports:
      // - target: 5000
        // published: 5000
        // this mean the container port 5000 will be published on the host port 5000 (port mapping)
    //! networks:
      // - counter-net
    //! volumes:
      // - type: volume
      // this mean the volume type is volume
        // source: counter-vol
        // target: /code
            // this mean the volume counter-vol will be mounted on the container path /code
  //! redis:
  // redis: is the name of another service
    // image: redis:alpine
    // image: is the image name that will be used to create the container this mean redis database container on alpine linux
    // networks:
      // - counter-vol

//! networks:
  // - counter-vol:
// networks: told docker engine to create a network called counter-vol as we write (docker network create counter-vol)

//! volumes:
  // counter-vol:
// volumes: told docker engine to create a volume called counter-vol as we write (docker volume create counter-vol)

// docker-compose up & => to run docker compose in background
// we see after build using docker compose we have two images one for web-fe and another for redis
// and there two container running one for counter-app-web-fe and another for redis:alpine
// and we see the network counter-app_counter-net
// and there two volumes counter-app_counter-vol and another volume

//! NOTE:
// every component (container, network, volume) will created by docker-compose will be prefixed by the name of the directory that contains docker-compose.yml file
// and we can override this prefix by add key in services called container_name: <name>

//! One of feature in docker-compose: between services we can communicate with each other via name of service

// docker exec <container id or container name> -c <counter> <container name or container id or website i want pin on it> => to ping from container to another container or website
// docker-compose ps => to get all services in docker compose
// docker-compose logs => to get all logs of all services in docker compose
// docker-compose down => docker will delete all containers (services) and networks and but not delete images and volumes
// and this is make sense because the main idea from docker compose is make persistent data and this data is in volumes
// so the volume is important part
// and not delete to be more fast if you build service again

// but if you want delete images add rmi in command
// docker-compose down rmi => docker will delete all containers (services) and networks and images.

//! We can make more than network in docker compose and make network internal to make container can't communicate with global network
//! In our Example:

// version: '3.7'
// services:
//   web-fe:
//     build: .
//     command: python app.py
//     ports:
//       - target: 5000
//         published: 5000
//     networks:
//!       - frontend-net
//!       - backend-net
//     volumes:
//       - type: volume
//         source: counter-vol
//         target: /code
//   redis:
//     image: redis:alpine
//     networks:
//!       backend-net:
// networks:
//!   frontend-net:
//!   backend-net:
//!     internal: true
//! this mean the backend-net is an internal network and it will not be accessible from outside the docker-compose file
// volumes:
//   counter-vol:

// in this docker compose we have two networks frontend-net and backend-net and backend-net is internal network and this mean the container in this network
// can't communicate with any network outside docker compose file

// we make web-fe service in two networks frontend-net and backend-net and redis service in backend-net
// so web-fe service can communicate with redis service and global network like google.com
// redis service can communicate web-fe service but can't communicate with global network like google.com
//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//! Docker Swarm
//! Docker Swarm is a container orchestration tool, meaning that it allows the user to manage multiple containers deployed across multiple host machines.
// it make cluster of docker hosts and make this cluster work as one host and if i create container or network in this cluster it will be distributed on all hosts in this cluster

// Docker Swarm => Is a set of nodes (hosts) or one node
// Docker Swarm => Convert docker host from standalone docker host to node inside cluster of docker hosts
// Each node in Docker swarm as from manager or worker

//! Manager node in docker swarm:
// Node that manage responsibilities of control plane (orchestration plane), execute commands, create services, edit services, delete services, edit on docker swarm.
// Manager node include etcd (database) via key value store in memory to store information (configuration) about docker swarm and this information is metadata about services, networks, volumes, etc.

// This database (etcd) in manager node only so any command related to this database will be execute in manager node.

//! Numbers of manager node: we can make any number of manager node but we recommend be from 1 to 7 manager node and this number should be odd number
//! Numbers of worker node: we can make any number of worker node

// Manager node work as leader and worker node work also.

// docker swarm init --advertise-addr <IP-address>:port by default (2377  --listen-addr <IP-address>:port by default (2377) => create etcd database, convert engine to node in docker swarm and via it i can join another node to docker swarm
// docker swarm init => to create etcd database, convert engine to node in docker swarm and via it i can join another node to docker swarm
// adn create first node and by default be manager node
// docker swarm join-token worker => to get token to join worker node to docker swarm
// docker swarm join-token manager => to get token to join manager node to docker swarm

//! NOTE => If we run docker info command after added node to our swarm:
// we after client and server we see swarm: active and this mean we have docker swarm
// Swarm: active
// NodeID: 6oim1czjj3rjr7d6fte1rxi39
// Is Manager: true
// ClusterID: 9n5op4hu2524tmrcs8yv7z83j
// Managers: 1
// Nodes: 1
// Default Address Pool: 10.0.0.0/8
// SubnetSize: 24
// Data Path Port: 4789
// etc...

// docker node ls => to get all nodes in docker swarm and explain manager node and worker node
//! NOTE => Each node in docker swarm should be in host machine and this host machine should be in same network

//! We work with services not containers in docker swarm
// We can make standalone container in node in docker swarm using docker container run command but this container will not be in docker swarm
// if this container is terminated swarm will not create it again

//! But the way we deploy container in docker swarm is using docker service not in standalone host or node
//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//! Docker Service:
// docker service create --name <service name> -p 80:80 --replicas <number of replicas> <image name>:<tag> => to create service in docker swarm
// with this command we create service in docker swarm and this service is distributed on all nodes in docker swarm
// after pull all images we see //! Service converged
// Service converged and this mean all images is pulled and all containers is up and running distributed correctly and ready to serve any request
// on this services from any way

// And we see nginx in images and two networks ingress and type of it driver is overlay
// Overlay driver is driver we can't make it without swarm initialization this driver make the same network in more than docker host.
// the second network is docker_gwbridge

// docker service ls => to get all services in docker swarm
// docker service ps <service name> => to get all containers in service

//! NOTE:
// we can execute docker service command in node manager only we can't execute it in node worker
// docker service rm <service name> => to delete service

//! NOTE:
// If i have manager and worker nodes and we created service docker swarm will distribute this service on worker node in the beginning
// then if all worker nodes is full docker swarm will distribute this service on manager node
// but if service run on worker node on host machine and we go to manager node on another host machine and we open browser and write localhost
// we will see the service (nginx) and this because ingress network is special network in docker swarm and this network maker docker swarm
// forward host will serve this service to all nodes in docker swarm so i can see this host in any node in docker swarm
//! And this the idea from dicker swarm

// docker service scale <service name>=<number of replicas> => to scale service (increase or decrease number of replicas)
//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//! NOTE:
// If node is down and this node was have service up and running docker swarm will distribute this service on another nodes in docker swarm
//! This called failover and this is one of benefits from docker swarm
//! But if this node is up again docker swarm will not distribute this service on this node again we can do this manually (configurations)

// docker service update --image <image name>:<tag> --update-parallelism <number of replicas> --update-delay <time> <service name> => to update service
// --update-parallelism <number of replicas> => to update number of replicas in the same time
// --update-delay <time> => time between update replicas and another replicas
// docker service update --rollback <service name> => to rollback service to previous version

//! NOTE:
// If i write docker service create --name ubuntu --replicas 2 ubuntu:latest will try to be this ready and fail etc..

//! Why i can create 6 containers from nginx image in docker swarm but i can't create any container from ubuntu image?
//! There two types of services or applications:
//! 1) Stateless application:
// this application doesn't have any data or information and the output from this applications doesn't changed if external factors changed
// example: web server, etc.
//! 2) Stateful application:
// this application has data or information  and the output from this applications will changed if external factors changed
// example: database, etc.

//! In our example:
// Stateful mean this application must up with 6 replicas and if one of this replicas is down docker swarm will create it again
// because this command i up service with 6 replicas this configuration is saved in etcd database in manager node
// also considered under desired state should be connected on network (x) and should be mounted on volume (y) etc...

//! If any information form desired state is changed docker swarm will happen problem and service don't be up this mean form serviced converged
// this mean desired state is matched with current state
//! Desired state:
// - all containers up and running
// - number of containers of up and running
// - containers running on which nodes
// - and any state i selected it in command i created service via it etc..

//! So ubuntu image does't work because not there container running.
// but if i want to create service from ubuntu image i should run command inside ubuntu to run service in background
// and this service always up and running. and this service is stateless application
//! Example:
// docker service create --name ubuntu --replicas 2 ubuntu:latest bash -c "while true; do echo hello; sleep 2; done"


/**
Dockerfile:
# Stage 1
FROM node:14.15.4 as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/
RUN npm install
RUN npm run build --prod

# Stage 2
FROM nginx:alpine
COPY --from=build /app/dist/roboost-system /usr/share/nginx/html

.dockerignore:
# Exclude development and build artifacts
node_modules
npm-debug.log
dist

# Exclude version control files
.git
.gitignore

# Exclude configuration files
angular.json
tsconfig.json
tslint.json

# Exclude any other unnecessary files or directories
# Add more entries as needed

COMMAND:
docker build --tag roboost-fe .

docker images

docker run -d -p 4200:80 --name roboost-fe roboost-fe

docker tag <image name> <username>/<image name>:<tag> => to tag image


docker image push <username>/<image name>:<tag>


*/