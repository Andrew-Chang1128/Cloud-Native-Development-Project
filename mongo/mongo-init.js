db = db.getSiblingDB('cnp');

db.createCollection('user');
db.createCollection('route');
db.createCollection('order');

db.user.insertMany([{
    "id": 1,
    "name": "test",
    "email": "test@test",
    "password": 123456,
    "type": 1,
    "avgStar": 0
}]);

db.route.insertMany([{
    "routeId": 1,
    "driverId": 1,
    "dayOfWeek": [
      "Sunday",
      "Tuesday"
    ],
    "maxNumOfPassenger": 4,
    "startTime": "16:00:00",
    "routeList": [
      {
        "loc": "place1",
        "lat": 23,
        "lng": 120.1
      },
      {
        "loc": "place2",
        "lat": 23.1,
        "lng": 120
      },
      {
        "loc": "place3",
        "lat": 23.1,
        "lng": 119.9
      }
    ]
}]);

db.order.insertMany([{
    "orderId": 1,
    "routeId": 1,
    "datetime": "2023/06/11 16:00:00",
    "passenger": [
      {
        "subOrderId": 1,
        "passengerId": 2,
        "numOfPassenger": 1,
        "fee": 60,
        "start": {
          "loc": "place1",
          "lat": 23,
          "lng": 120.1
        },
        "end": {
          "loc": "place2",
          "lat": 23.1,
          "lng": 120
        },
        "timestamp": "2023/06/09 12:59:00"
      },
      {
        "subOrderId": 2,
        "passengerId": 3,
        "numOfPassenger": 2,
        "fee": 90,
        "start": {
          "loc": "place2",
          "lat": 23.1,
          "lng": 120
        },
        "end": {
          "loc": "place3",
          "lat": 23.1,
          "lng": 119.9
        },
        "timestamp": "2023/06/10 21:45:05"
      }
    ]
}]);

