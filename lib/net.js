
/**
 * net.js: 	Net object responsible for creating a socket to listen on
 * 			for messages from a client
 *
 * (c) 2013, dotfolf
 */
var ws 		= require('websocket.io')
  , http 	= require('http')
  , log 	= require('./logging.js').getLogger('sockly/net')
  , client 	= require('./client.js')
  , server


// Handler for messages from the socket client
_onMessage = function(data) {
	log.debug('socket message: ', JSON.stringify(data));
}

// Handler for socket close from the client
_onClose = function() {
	log.debug('socket close');
}

// Handler for connect success to the websocket connection
_onConnection = function(socket) {
	
	// Notify the client connection was successful
	socket.send('connected OK!');

	// Listen for messages from the websocket client
	socket.on('message', _onMessage);
	socket.on('close', _onClose);
}

// Creates a statsd client
_createClient = function() {
	var s = new client.create('', 8125);
}


exports.createServer = function(port) {

	var port = port || 3000;
	var httpConn = http.createServer().listen(port || 3000);

	server = ws.attach(httpConn);
	server.on('connection', _onConnection);

	log.debug('createServer: server listening on socket port:' + port);
}
