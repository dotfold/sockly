
/**
 * net.js: 	Net object responsible for creating a socket to listen on
 * 			for messages from a client
 *
 * (c) 2013, dotfold
 */
// var ws 				= require('websocket.io')
var BinaryServer	= require('binaryjs').BinaryServer
  , clientbuilder 	= require('./../net/clientbuilder')
  , log 			= require('./../log/logger').getLogger('sockly.net.server')
  , client
  , stream


// these should all be public on a client manager, so they are testable!

//
// ### function _onMessage data
// #### @data {Object} Message data received on socket
// Handler for socket message event
// 
_onMessage = function(data) {
	log.debug('socket message: ', JSON.stringify(data));

	// stream to the statsd client
	client.send(data);
}

//
// ### function _onClose
// Handler for socket close event
// 
_onClose = function() {
	log.debug('socket close');

	// cleanup the stats client, kill
}

// 
// ### function _onConnection socket
// #### @socket {Socket} Socket recieved from successful connection
// Handler for connect success to the websocket connection
// 
_onConnection = function(socket) {
	
	log.debug('socket connected');

	// Notify the client connection was successful
	socket.send('connectok');

	// Listen for messages from the websocket client
	socket.on('message', _onMessage);
	socket.on('close', _onClose);

	console.log(socket);
	socket.pipe(stream);
}

//
// ### function _createClient
// Creates a statsd client
// 
_createClient = function() {
	client = clientbuilder.getBuilder()
		.withHost('localhost')
		.withPort(8125)
		.build();

	client.on('ready', function() {
		_bindSocketEvents();

		log.debug('stats client ready');
		client.send('counter:0.1|ms');
	})

	stream = client.createSocket();
}

//
// ### function _bindSocketEvents
// Binds events on the socket to handlers in this module
// 
_bindSocketEvents = function() {
	client.bindSocketEvent('error', function(params) {
		log.error('socket error: ' + params);
	});

	client.bindSocketEvent('message', function(data) {
		log.debug('socket message: ' + data);
	})
}

//
// ### function createServer port
// #### @port {Number} port number to connect the server instance
// Creates a server so the socket can be accessed for communication to
// the statsd instance
// 
exports.createServer = function(port) {

	var port = port || 3000;
	var server = BinaryServer({ port: port });
	server.on('connection', _onConnection);

	_createClient();

	log.debug('createServer: server listening on socket port:' + port);
}

