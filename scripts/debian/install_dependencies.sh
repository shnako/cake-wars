#!/bin/sh
v=8
curl -sL https://deb.nodesource.com/setup_$v.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo ln -s "$(which nodejs)" /usr/local/bin/node
sudo npm install -g yarn serve