
/**
 * statsdclient.js: client object responsible for connecting to a statsd
 * 					instance and data communications
 *
 * (c) 2013, dotfold
 */

var dgram 	= require('dgram')
  , stream	= require('stream')
  , events	= require('events')
  , util	= require('util')
  , log		= require('./../log/logger').getLogger('sockly.net.client')

//
// ### function Client
// Client object responsible for data communication with statsd
// 
var Client = function() {

	// event emitter
	events.EventEmitter.call(this);

	//
	// host and port settings for socket connection
	// 
	var host, port;

	//
	// udp socket object
	// 
	var socket;

	//
	// Internal duplex stream
	//
	var inputStream = _createInputStream();
}

util.inherits(Client, events.EventEmitter);

//
// ### function create
// Creates a socket and sets up the initial binding.
// When the socket is listening this Client will emit a 'ready' event.
Client.prototype.createSocket = function() {
	this.socket = dgram.createSocket('udp4');

	var self = this;
	this.socket.once('listening', function () {
		self.emit('ready');
    });

    this.socket.once('close', function() {
    	log.debug('connection to statsd closed');
    	// emit
    })

    this.socket.bind(0, null);

    return inputStream;
}

//
// ### function close
// Closes the socket. When socket is closed this Client will emit
// a 'closed' event.
// 
Client.prototype.close = function() {

}

//
// ### function send data
// #### @data {Object} data message to send to statsd
// Sends a message Buffer via the socket connection to statsd
// 
Client.prototype.send = function(data) {
	var buf = new Buffer(data);
	log.debug('send buf ' + data);
	this.socket.send(buf, 0, buf.length, this.port, this.host);
}

//
// ### function bind event, callback
// #### @event event name to bind on the socket
// #### @callback callback for event emitted
// Bind to an event on the socket
// 
Client.prototype.bindSocketEvent = function(event, callback) {
	if (!this.socket) {
		callback(false);
		return;
	}

	this.socket.on(event, callback);
}

//
// Internal writeable Stream
// 

function _createInputStream() {

	inputStream = new stream.Stream();
	inputStream.writable = true;

	var bytes;

	inputStream.write = function(buf) {
		bytes += buf.length;
	}

	inputStream.end = function(buf) {
		if (arguments.length) s.write(buf);

	    inputStream.writable = false;
	    console.log(bytes + ' bytes written');
	}

	inputStream.end = function() {
		inputStream.writable = false;
	}

	return inputStream;
}



//
exports.Client = Client;
