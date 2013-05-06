
var client 	= require('./client')
  , log		= require('./../log/logger').getLogger('sockly.net.clientbuilder')

//
// ### function ClientBuilder
// Builder util to create client objects using a fluent interface
// Default host: 'localhost'
// Defualt port: 8125
// 
exports.getBuilder = function() {

	// defaults
	var _host = 'localhost'
	  , _port = 8125;

	return {

		//
		// ### function withHost host
		// #### @host {String} host address of statsd instance
		// Sets the host for the builder
		// 
		withHost: function(host) {
			_host = host;
			return this;
		},

		//
		// ### function withPort port
		// #### @port {Number} statsd instance port
		// Sets the port for the builder
		// 
		withPort: function(port) {
			_port = port;
			return this;
		},

		//
		// ### function build
		// Builds the statsd Client object using builder options
		build: function() {

			var sc = new client.StreamingClient();
			sc.host = _host;
			sc.port = _port;
			return sc;
		}
	}

}
