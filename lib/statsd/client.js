
/**
 * statsdclient.js: client object responsible for connecting to a statsd
 * 					instance and data communications
 *
 * (c) 2013, dotfold
 */

var dgram 	= require('dgram')
  , log		= require('./../log/logger').getLogger('sockly/statsd/client')

//
// ### function ClientBuilder
// Builder util to create client objects using a fluent interface
// Default host: 'localhost'
// Defualt port: 8125
// 
function ClientBuilder() {

	var _host = 'localhost'
	  , port = 8125;

	return {

		//
		// ### function withHost host
		// #### @host {String} host address of statsd instance
		// Sets the host for the builder
		// 
		withHost: function(host) {

			return this;
		},

		//
		// ### function withPort port
		// #### @port {Number} statsd instance port
		// Sets the port for the builder
		// 
		withPort: function(port) {

			return this;
		},

		//
		// ### function build
		// Builds the statsd Client object using builder options
		build: function() {

			var client = new Client();
			client.host = _host;
			client.port = _port;
			return client;
		}
	}


}

//
// ### function Client
// Client object responsible for data communication with statsd
// 
function Client () {

	//
	// host and port settings for socket connection
	// 
	var host, port;

	//
	// udp socket object
	// 
	var socket;

}

//
//
Client.prototype = {

	//
	// ### function create
	// Creates 
	create: function() {
		this.socket = dgram.createSocket('udp4');
		this.socket.bind(0, null);
	},

	//
	// ### function close
	// Closes the socket connection to statsd
	// 
	close: function() {

	},

	//
	// ### function send data
	// #### @data {Object} data message to send to statsd
	// Sends a message Buffer via the socket connection to statsd
	// 
	send: function(data) {

	},

	//
	// ### function bind event, callback
	// #### @event event name to bind on the socket
	// #### @callback callback for event emitted
	// Bind to an event on the socket
	// 
	bind: function(event, callback) {
		if (!this.socket) {
			callback('no socket');
		}

		this.socket.bind(event, callback);
	}
}

//
exports.create = function(host, port) {

	return ClientBuilder()
		.withHost(host)
		.withPort(port)
		.build(); 
}