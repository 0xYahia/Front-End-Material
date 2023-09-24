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