FROM php:8-apache

#PHP

RUN apt update
RUN apt install -y zlib1g-dev libwebp-dev libpng-dev && docker-php-ext-install gd
RUN apt install libzip-dev -y && docker-php-ext-install zip

#Apache

RUN a2enmod rewrite
RUN service apache2 restart

EXPOSE 80