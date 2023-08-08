var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('new connection');
  console.log('id socket', socket.id);

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log('mensagem: ', msg)
  });
});

http.listen(3010, function(){
  console.log('listening on *:3010');
});