FROM mingder78/elastalert:v3.0.4
# v3.0.4 already install node v14 and elastalert v0.2.4, create indices then stop
#FROM khezen/elastalert
#FROM debian:jessie

RUN mkdir -p /var/www/my-app
COPY ./my-app /var/www/my-app
WORKDIR /var/www/my-app
RUN npm install 
RUN npm install pkg
RUN npm run build
