
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , util = require('util')
  , path = require('path');

var app = express();

app.locals({
	inspect:function(obj){
		return util.inspect(obj,true);
	}
});

app.use(function(req,res,next){
	
	res.locals.headers=req.headers;
	next();
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));	
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/u/:user',routes.user);
app.post('/post',routes.post);
app.get('/reg',routes.reg);
app.post('/reg',routes.doReg);
app.get('/login',routes.login);
app.post('/login',routes.doLogin);
app.get('/logout',routes.logout);

app.get('/hello',routes.hello);
app.get('/users', user.list);
app.get('/list',function(req,res){
	res.render('list',{
		title:'List',
		items:[1991,'ken','express','Node.js']
	});
});

app.get('/helper', function(req,res){
	res.render('helper',{
		title:'helper'
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
