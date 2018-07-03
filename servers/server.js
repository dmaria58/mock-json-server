const path = require('path');
const jsonServer = require('json-server');
const index_file = require('./db/index.js')
const config = {
  SERVER:"127.0.0.1",  
  PORT: 3003,
};
const ip = config.SERVER;
const port = config.PORT;
const server = jsonServer.create();
const router = jsonServer.router();
const middlewares = jsonServer.defaults();




server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use((req, res, next) => {
 res.header('X-Hello', 'World');
 next();
})
router.render = (req, res) => {
	if(req.method == "POST"){
		res.jsonp(index_file[req.url]);
	}
	else if(req.method == "GET"){
		res.jsonp({
			code: 0,
			body: res.locals.data
		})		
	}
}
server.use("/api",router);
server.use(router);

server.listen({
	host: ip,
	port: port,
}, function() {
	console.log(JSON.stringify(jsonServer));
	console.log(`JSON Server is running in http://${ip}:${port}`);
});