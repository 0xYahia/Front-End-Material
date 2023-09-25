# We can use FROM to specify the base image for our own image. via more than way.
# FROM <image>
FROM python
# FROM <image>:<tag>
FROM ubuntu:18.04
# FROM <repository>/<image>:<tag> (none official image)
FROM asami76/hadooopp-psedudo:v1.0
# FROM <image>@<digest> to sure the image is not changed (we can use it with none official image)
FROM python@sha256:25a976dc387d01af6cb8c419a03e4b553d88ac5152d250920c94553e24cad3c7
# If i pull image from registry, not docker hub, i must specify the registry url
FROM mcr.microsoft.com/mssql/server:2019-latest
# If i pull from private registry, i must specify the username and usually we write port
FROM private-registry.somecompany.com:5000/someimage
# Image from scratch without any base image without any layers
FROM scratch

################################################################################################

# WORKDIR COPY ADD
# WORKDIR will change the current working directory or directory will build on it to the specified directory in the image
# and if this directory not exist, it will create it.
WORKDIR /app
# If we have subdirectory and we don't give it path, it will be considered as subdirectory of the current working directory
WORKDIR subdir
# the final result will be /app/subdir

# copy hello.py from the current directory to the /app directory in the image in file hello.py (this called shell mode) as we write command in shell
COPY hello.py /app/hello.py
# copy all files from the current directory to the /app directory in the image make sure wirte / at the end of the path to told docker that it is directory not file
# if you don't write / at the end of the path, it will be renamed files
COPY hello.py startup.sh /app/
# we can use wildcards to copy files
COPY *.py /app/
# copy all files from the current directory to the /app directory in the image and if the directory not exist, it will create it
COPY . /app/
# if we file names have space, we can use double quotes in square brackets and write directory name in the end (this called exec mode) as we write instructions
COPY ["name with space.py", "name with space2.py", "name with space3.py", "/app/"]

# If you want ignoe some files or directories, you can use .dockerignore file like .gitignore file and you can using the same syntax
# Dockerfile* *.pyc !important.pyc (! to ignore ignore file)
# ignoer all files with .pyc extension except important.pyc file

# ADD instruction is like COPY instruction but using to copy file not exist in build context to image
ADD <url> /app
ADD <tar archive> /app/

# Shell
SHELL [ "/bin/bsh", "-c" ]
# To change the default shell to run commands in the image from /bin/sh to /bin/bash (from standard shell to bash shell)
SHELL [ "/usr/local/bin/python", "-c" ]
# if your component has interactive shell, you can use SHELL instruction to change the default shell to interactive shell like python

################################################################################################

# RUN command make intemidiate container (means make a new layer)
# RUN instruction is used to execute commands in the image default shell is /bin/sh, if you want to change it, you can use SHELL instruction before RUN instruction
# NOTE => RUN instruction doesn't recive any input from user
# RUN <command> <arg1> <arg2> ... (shell mode)
RUN apt-get update
# RUN ["executable", "param1", "param2", ...] (exec mode)
RUN [ "apt-get", "update" ]
RUN echo "This is a line" > /temp/file
RUN echo "This is a nother line" >> /temp/file
RUN cat /temp/file
# NOTE => the execuation of RUN instruction will be in output of docker build command, so it useful to use it for debugging
RUN fin / -name "python*" | wc -l
RUN pipe install flask numpy
RUN apt update && apt upgrade -y
RUN java -version
RUN apt install wget vim openssh-server -y

################################################################################################

# Metadata
# ENV instruction is used to set environment variable in the image and this variable will be available for all intermidiate containers
# we doesn't declear it via export command because if we do that, it will be removed when the shell session is closed
# ENV <key> <value> if we declear one variable
ENV SQL_SA_ACCOUNT "sa"
# ENV <key1>=<value1> <key2>=<value2> ... if we declear more than one variable
ENV SQL_USER=sa SQL_PASSWORD="P@ssw0rd" SQL_DB="master"
# all environment variables in base image in from instruction it will be inherited to the new image
# path variable mean all environment variables we take it from base image and add it to the new image
ENV PATH $PATH:/app
# brase mode
ENV PATH="/usr/local/hadoop/bin:${PATH}"
# this mean add /usr/local/hadoop/bin to the current path variable
ENV EMPTY ""
################################################################################################
# USER instruction is used to change the user in the image to make user is not root
# Example
FROM ubuntu:latest
RUN groupadd hadoop & useradd -g hadoop hduser
USER hduser
RUN id
# the output will be uid=1000(hduser) gid=1000(hadoop) groups=1000(hadoop)
################################################################################################
# There some of instructions doesn't edit anythings in the image, it just provied some information to docker like LABEL
# LABEL
LABEL maintainer="Mohamed Yahia"
LABEL description="This is a test image"
LABEL version="1.0"
LABEL is_dev="true"
################################################################################################
# ENTRYPOINT instruction is used to specify the default command to run when the container is created you can see cmd in inspect
# ENTRYPOINT <command>
ENTRYPOINT ["/bin/bash", "-c"]

# CMD instruction is used to specify the default arguments to the ENTRYPOINT instruction
# CMD <arg1> <arg2> ...
CMD ["<args for enterypoint>"]

# NOTE => some commands doesn't work good with enterypoint but it work good with CMD.
# NOTE => anything related to metadata like ENV, ENTRYPOINT, CMD, we can override it when we run the container
# NOTE => you can use cmd to execute more than one command in the same time

################################################################################################
# ARG instruction is used to specify the arguments that we can use it in docker file and when we build the image