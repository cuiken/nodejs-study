var settings=require('../setting');
var Db=require('mongdb').Db;
var Connection=require('mongdb').Connection;
var Server=require('mongdb').Server;


module.exports=new Db(settings.Db,new Server(settings.host,Connection.DEFAULT_PORT,{}));