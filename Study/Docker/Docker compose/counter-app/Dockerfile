FROM python:3.6-alpine
ADD . /code
WORKDIR /code
RUN apt-get update && \
apt-get install -y docker.io docker-compose
RUN pip install -r requirements.txt
ENTRYPOINT ["docker-compose"]
CMD ["python", "app.py"]