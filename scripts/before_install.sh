#!/bin/bash

PATH=/var/www/html

apt update

if [ -d "$PATH" ]; then
    cd $PATH
    rm -rf *
else 
    mkdir /var/www/html
    cd $PATH
fi

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

if ! which nginx > /dev/null 2>&1; then
    apt-get install -y nginx;
fi