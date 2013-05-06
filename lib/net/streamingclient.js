/**
 * statsdclient.js: client object responsible for connecting to a statsd
 * 					instance and data communications
 *
 * (c) 2013, dotfold
 */

var dgram 	= require('dgram')
  , stream	= require('stream')
  , util	= require('util')
  , log		= require('./../log/logger').getLogger('sockly.net.streamingclient')


//
// ### function StreamingClient
// Client object responsible for data communication with statsd
// 
var StreamingClient = module.exports = function StreamingClient() {

	// inherits
	stream.Stream.call(this);

	//
	// host and port settings for socket connection
	// 
	this.host = 'localhost';
	this.port = 8125;

	//
	// udp socket object
	// 
	// var socket;

	// this is a write only stream
	this.writable = true;
}

//
// Inherit from stream.Stream
//
util.inherits(StreamingClient, stream.Stream);

//
// ### function create
// Creates a socket and sets up the initial binding.
// When the socket is listening this Client will emit a 'ready' event.
//
StreamingClient.prototype.createSocket = function() {
	
	//
	this.socket = dgram.createSocket('udp4');

	var self = this;
	this.socket.once('listening', function () {
		self.emit('ready');
    });

    this.socket.once('close', function() {
    	log.debug('connection to statsd closed, retry...');
    	// emit
    })

    this.socket.bind(0, null);
}

//
// ### function close
// Closes the socket. When socket is closed this Client will emit
// a 'closed' event.
// 
StreamingClient.prototype.write = function(message) {

	log.debug('write to stream');
	// here, we probably want to frame because of Network MTU (512 max?)
	// \n denotes a new metric (as per statsd docs)
	this.send(message);
}

//
// ### function end message
// #### @message {String}
//
//
StreamingClient.prototype.end = function(message) {
	if (arguments.length) {
		this.send(message);
	}

	this.writable = false;
}

//
// ### function destroy
// 
//
StreamingClient.prototype.destroy = function() {

}

//
// ### function send message, callback
// #### @message {String} Message to send as Buffer over the dgram socket.
// #### @callback {Fucntion} Callback from the socket send
//
//
StreamingClient.prototype.send = function(message, callback) {

	function dgramCallback(err, bytes) {
		if (callback) {
			callback.call(null, args.slice);
			log.debug(bytes + ' bytes written');
		}		
	}

	var buffer = new Buffer(message);
	this.socket.send(buffer, 0, buffer.length, this.port, this.host, dgramCallback);
	
}
