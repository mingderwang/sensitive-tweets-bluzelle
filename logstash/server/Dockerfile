FROM mingder78/elastalert:v3.0.2
# v3.0.0 already install node v14
#FROM khezen/elastalert
#FROM debian:jessie

RUN mkdir -p /var/www/my-app
COPY ./my-app /var/www/my-app
WORKDIR /var/www/my-app
RUN npm install 
RUN npm install pkg
RUN npm run build
