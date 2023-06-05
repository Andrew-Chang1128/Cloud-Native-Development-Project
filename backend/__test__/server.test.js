const request = require('supertest');
let server = require('../server');
//since we export the server object using exports.server = server, we need to access app via server.server.app
server = server.server
// jest.mock('../models/userModel', () => {
//   return {
//     login: jest.fn().mockResolvedValue("wdwww"),
//   };
// });
// jest.mock("../models/userModel");
describe('Server', () => {
    describe("GET /driver", ()=>{
     test("basic test", ()=>{
      expect(1).toBe(1);
     })
    });
    describe("POST /user/login",()=>{
      test("correct username", async ()=>{
        const res = await request(server.app).post("/user/login").send({
          email: "user@gmail",
          password: "1"
        })
        console.log(`res test: ${res.text}`)
        expect(res.text).not.toBe("Unauthorized!")
      })
    })
    // describe("POST /user/login",()=>{
    //   describe("name and password is passed",()=>{
       
    //     test("correct user and password", async ()=>{
    //       const res = await request(server.app).post("/user/login").send({
    //           username: "user1",
    //           password: "123"
    //         })
    //       console.log(`res test: ${res.text}`)
    //       expect(res.text).not.toBe("Unauthorized!")
    //       // console.log(res.text)
    //     })
    //     test("incorrect user and password", async ()=>{
    //       const res = await request(server.app).post("/user/login").send({
    //           username: "user1",
    //           password: "456"
    //         })
    //       expect(res.text).toBe("Unauthorized!")
    //     })
    //   })
    //   describe("name or password is missing",()=>{
    //     test("name  is missing", async ()=>{
    //       const res = await request(server.app).post("/user/login").send({
    //         username:"david"
    //       })
    //       expect(res.text).toBe("Unauthorized!")
    //     })
    //     test(" password is missing", async ()=>{
    //       const res = await request(server.app).post("/user/login").send({
    //         username:"david"
    //       })
    //       expect(res.text).toBe("Unauthorized!")
    //     })
    //     test("name and password are missing", async ()=>{
    //       const res = await request(server.app).post("/user/login").send({
    //         username:"david"
    //       })
    //       expect(res.text).toBe("Unauthorized!")
    //     })
    //   })
    // })
    // describe("JWT authorization",()=>{
    //   test("use /allRoutes to test authorization (first login to get token then get allRoutes)", async()=>{
    //     //get toekn
    //     const res = await request(server.app).post("/user/login").send({
    //       username: "user1",
    //       password: "123"
    //     });
    //     console.log("token: ",res.text);
    //     const token = res.text;
    //     const resGetAllRoute  = await request(server.app).get("/allRoutes").set('Authorization', `Bearer ${token}`);
    //     console.log("get all routes:", resGetAllRoute.text);
    //     expect(resGetAllRoute.text).not.toBe("Forbidden");//successfully get routes
    //   })
    // })
    // describe("createUser", ()=>{
    //   test("createUser unit test", async()=>{
    //     const res = await request(server.app).post("/user/createUser").send({
    //       username: "user3",
    //       password: "3"
    //     });
        
    //   })
    // })
  
})
server.close()
afterAll(() => {
  server.close()
})
