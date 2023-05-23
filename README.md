# Cloud-Native-Development-Project
This is the repo for Cloud Native Development: towards Best Practice final project

## Environment set up
 ```
 docker build . -t username/node-web-app

 $ docker images

 docker run -p 5000:5000 -v $(pwd):/src -d username/node-web-app
 ```