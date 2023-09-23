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