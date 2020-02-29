var express=require('express'); //modulo de nodemon
var app=express();//llamar el metodo
var server = require('http').Server(app);//LLAMO EL METODO HTTP Y LE PASO EL SERVER APP declarado
var io = require('socket.io')(server);

server.listen(6677,function(){
  console.log('servidor corriendo en http://localhost:6677');
});
