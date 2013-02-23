

var dgram = require('dgram');

//
//
function ClientBuilder() {

	var _host, port;

	return {

		withHost: function(host) {

			return this;
		},

		withPort: function(port) {

			return this;
		},

		build: function() {

			var client = new Client();
			client.host = _host;
			client.port = _port;
			return client;
		}
	}

}

// TODO property helper

//
//
function Client = function() {

	var host, port;

	// ES5 objects properties
	Object.defineProperty(this,
		'host',
		get: function() {
			return host;
		},
		set: function(value) {
			host = value;
		}
	);

	Object.defineProperty(this,
		'port',
		get: function() {
			return port;
		},
		set: function(value) {
			port = value;
		}
	)
}

//
//
Client.prototype = {

	create: function() {
		dgram.createSocket('udp4');
	},

	close: function() {

	},

	send: function() {

	}

}

//
exports.create = function(host, port) {

	return ClientBuilder()
		.withHost(host)
		.withPort(port)
		.build(); 
}