# this is to pull python image from docker hub
FROM python:latest

# if this directory doesn't exist, it will create it
WORKDIR /app

# copy the requirements.txt file from the local machine to the container
COPY requirements.txt .

# install the requirements.txt file
RUN pip install -r requirements.txt

# copy the current directory to the container
COPY hello.py .

EXPOSE 5000

# run the python file
CMD python hello.py