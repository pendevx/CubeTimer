#!/bin/bash

if [ ! -d "$HOME/server" ]; then
    mkdir "$HOME/server"
fi

cd $HOME/server
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs