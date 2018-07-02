const path = require('path');
const jsonServer = require('json-server');

const config = {
  SERVER:"127.0.0.1",  
  PORT: 3003,
  DB_FILE:"db.json"
};
const ip = config.SERVER;
const port = config.PORT;
const db_file = config.DB_FILE;

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, config.DB_FILE));
const middlewares = jsonServer.defaults();



server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use((req, res, next) => {
 res.header('X-Hello', 'World');
 next();
})
router.render = (req, res) => {
	console.log(res);
	if(req.method == "POST"){
		res.jsonp({
			code: 0,
			body: {result:"success"}
		})
	}
	else{
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