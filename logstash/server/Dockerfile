FROM mingder78/elastalert:v2.0.0
#FROM khezen/elastalert
#FROM debian:jessie

RUN apt-get update -y
RUN apt-get install -y build-essential curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

RUN mkdir -p /var/www/my-app
COPY ./my-app /var/www/my-app
WORKDIR /var/www/my-app
RUN npm install 
RUN npm install pkg
RUN npm run build
