#!/bin/bash

if [ ! -d "$HOME/server" ]; then
    echo "Creating 'server' directory..."
    mkdir "$HOME/server"
    echo "'server' directory creation complete..."
else
    echo "'server' directory already exists..."
fi

if which node > /dev/null 
then
    echo "Node is installed, skipping..."
else
    echo "Installing Node..."

    cd $HOME/server
    curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    apt-get install -y nodejs

    echo "Node installation complete."
fi

if [ ! -x /usr/sbin/nginx ]; then
    apt-get install nginx
fi