#!/bin/bash

PATH="/var/www/html"

apt update

cd $PATH
rm -rf *

if which node > /dev/null 
then
    echo "Node is installed, skipping..."
else
    echo "Installing Node..."

    cd $PATH
    curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    apt-get install -y nodejs

    echo "Node installation complete."
fi

if [ ! -x /usr/sbin/nginx ]; then
    apt-get install -y nginx
fi