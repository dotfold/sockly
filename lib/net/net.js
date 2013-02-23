
/**
 * net.js: 	Net object responsible for creating a socket to listen on
 * 			for messages from a client
 *
 * (c) 2013, dotfold
 */
var ws 		= require('websocket.io')
  , http 	= require('http')
  , client 	= require('./../statsd/client')
  , log 	= require('./../log/logger').getLogger('sockly/net/net')
  // , server


//
// ### function _onMessage data
// #### @data {Object} Message data received on socket
// Handler for socket message event
// 
_onMessage = function(data) {
	log.debug('socket message: ', JSON.stringify(data));
}

//
// ### function _onClose
// Handler for socket close event
// 
_onClose = function() {
	log.debug('socket close');
}

// 
// ### function _onConnection socket
// #### @socket {Socket} Socket recieved from successful connection
// Handler for connect success to the websocket connection
// 
_onConnection = function(socket) {
	
	// Notify the client connection was successful
	socket.send('connected OK!');

	// Listen for messages from the websocket client
	socket.on('message', _onMessage);
	socket.on('close', _onClose);
}

//
// ### fucntion _createClient
// Creates a statsd client
// 
_createClient = function() {
	var s = new client.create();
	
	s.bind('error', function(params) {
		log.error('socket error:', params);
	});

	s.bind('listening', function(params) {
		log.debug('socket listening');
	});
}


//
// ### function createServer port
// #### @port {Number} port number to connect the server instance
// Creates a server so the socket can be accessed for communication to
// the statsd instance
// 
exports.createServer = function(port) {

	var port = port || 3000;
	var httpConn = http.createServer().listen(port || 3000);

	server = ws.attach(httpConn);
	server.on('connection', _onConnection);

	log.debug('createServer: server listening on socket port:' + port);
}

