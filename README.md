# Cloud-Native-Development-Project
This is the repo for Cloud Native Development: towards Best Practice final project

![example workflow](https://github.com/david-chenyu/Cloud-Native-Development-Project/actions/workflows/CI.yml/badge.svg)
    


## Environment set up
 ```
 $ docker build . -t username/node-web-app

 $ docker images

 $ docker run -p 5000:5000 -v $(pwd):/usr/src/app -d david/node-web-app

 $ docker exec -it <container-id> /bin/bash

```


 CNP API
=========================

# 共通功能

## 登入

POST /login

## 登出

DELETE /login

## 列出聊天室訊息

GET /message/:oid

## 傳送聊天室訊息

POST /message/:oid

# 司機

## 新增固定路線

POST /route

## 修改固定路線

PUT /route/:rid

## 刪除固定路線

DELETE /route/:rid

## 列出所有固定路線

GET /route

## 列出單筆固定路線

GET /route/:rid

## 開啟/關閉 接單模式

POST /status

Parameters
- mode : (open | close)

# 乘客

## 列出所有固定路線

GET /allRoutes

Parameters
- TODO

## 新增乘車預約

POST /reservation

## 取消乘車預約

DELETE /reservation/:resid

## 列出所有預約

GET /reservation

## 付款

現金


