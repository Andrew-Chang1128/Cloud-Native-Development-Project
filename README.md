# Cloud-Native-Development-Project
This is the repo for Cloud Native Development: towards Best Practice final project

![example workflow](https://github.com/david-chenyu/Cloud-Native-Development-Project/actions/workflows/CI.yml/badge.svg)
    


## Environment Setup

### Node.js & MongoDB

#### Start

```
 $ mkdir -p mongo/db mongo/configdb; rm -rf mongo/db/* mongo/configdb/*

 $ docker-compose up -d --build
```

#### Stop

```
 $ docker-compose down
```

### Node.js Only (Deprecated)

 ```
 $ docker build . -t <username>/node-web-app

 $ docker images

 $ docker run -p 5000:5000 -v $(pwd):/usr/src/app -d <username>/node-web-app

 $ docker exec -it <container-id> /bin/bash

```


## API Document

[HackMD](https://hackmd.io/@exodustw/CNP-API)
