var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  socket.on('message', function(msg){
	if(msg.length > 140)return;	  
    io.emit('message', msg);
  });
      socket.on('getColor', function(isGreen){
		io.emit('getColor', isGreen);
	});
	
});


http.listen(port, function(){
  console.log('listening on *:' + port);
});