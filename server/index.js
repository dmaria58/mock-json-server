    const path = require('path');
    const jsonServer = require('json-server');
    const ip = require('ip').address();
    const DB = require('./db.js');
    //const DB = require('../mock/mock.js');
    const server = jsonServer.create();
    const router = jsonServer.router(DB()); // 将所创建的数据对象传入，以之生成相应的路由
    const middlewares = jsonServer.defaults();
    server.use(jsonServer.bodyParser);
    server.use(middlewares);
    console.log(router);
    server.use(router);

    server.listen({
        host: ip,
        port: 3122
    }, function() {
        console.log(`JSON Server is running in http://${ip}:3122`);
    });