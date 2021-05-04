#!/bin/sh     
ssh -tt jenkins@40.114.52.166  << EOF 
git clone https://github.com/arijitmhptr/demoapp.git
cd demoapp 
npm install --production
npm install pm2 -g
pm2 start app.js --name node-app
exit
EOF