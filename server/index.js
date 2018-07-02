    const path = require('path');
    const jsonServer = require('json-server');
    const ip = require('ip').address();
    const DB = require('./db.js');
    //const DB = require('../mock/mock.js');
    const server = jsonServer.create();
    const router = jsonServer.router(DB()); // 将所创建的数据对象传入，以之生成相应的路由
    const middlewares = jsonServer.defaults();
    const jsontest = {
                      "posts": [
                        { "id": 1, "title": "json-server2", "author": "typicode" },
                        { "id": 2, "title": "json-server3", "author": "typicode" }
                      ],
                      "comments": [
                        { "id": 1, "body": "some comment", "postId": 1 ,"user":"MU001"}
                      ],
                      "profile": { "name": "typicode","vo":DB() }
                     }
    const router2 =  jsonServer.router(jsontest);                
    server.use(jsonServer.bodyParser);
    server.use(middlewares);
    server.use((req, res, next) => {
      if (req.method === 'POST') {
        req.body.createdAt = Date.now()
      }
      // Continue to JSON Server router
      next()
    })

    server.use(router2);
    //server.use(router2);

    server.listen({
        host: ip,
        port: 3122
    }, function() {
        console.log(`JSON Server is running in http://${ip}:3122`);
    });