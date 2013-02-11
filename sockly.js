

var ws = require('websocket.io')
  , http = require('http').createServer().listen(3000)
  , server = ws.attach(http)
  , adapters = require('./lib/adapters')


// logger level, from package, conf ?

/**
 * [ description]
 * @param  {Object} socket
 */
server.on('connection', function(socket) {
	
	// ack connection
	socket.send('connected OK!');

	/**
	 * Message handler from the client
	 * @param  {object} data
	 */
	socket.on('message', function(data) {
		console.log('on message', JSON.stringify(data));
	});

	/**
	 * Socket closed by client
	 */
	socket.on('close', function() {

	});
});


// create server stream to statsd
// start up the server
// connect






