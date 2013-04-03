var http=require('http');
var util=require('util');
var url=require('url');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end(util.inspect(url.parse(req.url,true)));
}).listen(3000);

console.log("HTTP server is listening at port 3000.");