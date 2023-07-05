#!/bin/bash

htmlPath=/var/www/html

apt update
apt-get update
apt-get install -y curl

if [ -d "$htmlPath" ]; then
    cd $htmlPath
    rm -rf *
else 
    mkdir /var/www/html
    cd $htmlPath
fi

if ! which nginx > /dev/null 2>&1; then
    apt-get install -y nginx;
fi