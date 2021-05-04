#!/bin/sh     
ssh jenkins@40.114.52.166
git clone https://github.com/arijitmhptr/demoapp.git
cd demoapp 
npm install --production
npm install pm2 -g
pm2 start app.js --name node-app