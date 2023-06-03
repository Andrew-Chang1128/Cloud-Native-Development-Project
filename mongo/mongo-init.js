db = db.getSiblingDB('cnp');

db.createCollection('user');
db.createCollection('route');
db.createCollection('order');

db.user.insertMany([{
    "id": 1,
    "name": "test",
    "email": "test@test",
    "password": 123456,
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
    "startTime": "2023-06-06T08:00:00.000Z",
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
  "datetime": "2023-06-11T08:00:00.000Z",
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
      "timestamp": "2023-06-09T04:59:00.000Z"
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
      "timestamp": "2023-06-10T13:45:05.000Z"
    }
  ]
}]);

