FROM khezen/elastalert
#debian:jessie

RUN apt-get update -y
RUN apt-get install -y build-essential curl
RUN curl -sL https://deb.nodesource.com/setup_5.x | bash -
RUN apt-get install -y nodejs

RUN mkdir -p /var/www/my-app
COPY ./my-app /var/www/my-app
WORKDIR /var/www/my-app
RUN npm install 
