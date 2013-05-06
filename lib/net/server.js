
/**
 * net.js: 	Net object responsible for creating a socket to listen on
 * 			for messages from a client
 *
 * (c) 2013, dotfold
 */

var wss		= require('streamws').Server
  , stream	= require('stream')
  , util	= require('util')
  , log		= require('./../log/logger').getLogger('sockly.net.server')

//
// ### function Server
// 
//
var Server = module.exports = function Server() {

	// inherit
	stream.Stream.call(this);

	this.readable = true;

	// how long to wait for a connection
	this.connectTimeout = 10000;

	// locals
	var socket;

}

//
// Inherit from stream.Stream
//
util.inherits(Server, stream.Stream);

//
// ### function getSocket
// Expose the socket resulting from the WebSocket connection.
//
Server.prototype.getSocket = function() {
	return this.socket;
}

//
// ### function connect
// Create WebSocket Server and await a connection
// from a client.
//
Server.prototype.connect = function() {
	var port = 3000;
	var server = new wss({ port: port });

	var self = this;

	server.on('connection', function(ws) {
		log.debug('connect OK');
		this.socket = ws;

		ws.on('message', function(msg) {
			log.debug('buffer from socket client', msg);
			self.emit('data', msg);
		})

  		self.emit('connected');
	});

	server.on('error', function(error) {
		log.debug('ws error');
	});
}
