FROM mingder78/elastalert:v3.0.4
# v3.0.4 already install node v14.7.0, python 3.6.5, and elastalert v0.2.4
#FROM khezen/elastalert
#FROM debian:jessie

RUN mkdir -p /var/www/my-app
COPY ./my-app /var/www/my-app
WORKDIR /var/www/my-app
RUN npm install 
RUN npm install pkg
RUN npm run build
