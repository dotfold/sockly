

var ws = require('websocket.io')
  , http = require('http').createServer().listen(3000)
  , server = ws.attach(http)
  , adapters = require('./lib/adapters')


// logger level, from package ?

/**
 * [ description]
 * @param  {Object} socket
 */
server.on('connection', function(socket) {
	
	//
	console.log('connection bound');

	// ack connection
	socket.send('connected OK!');

	/**
	 * [ description]
	 * @param  {[type]} data
	 */
	socket.on('message', function(data) {
		console.log('on message', JSON.stringify(data));
	});

	/**
	 * [ description]
	 */
	socket.on('close', function() {

	});
});


// create server stream to statsd
// start up the server
// connect



// about node and global vars...
onMessage = function(data) {

}



