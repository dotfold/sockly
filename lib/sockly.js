
/**
 * sockly.js:	Main module
 *
 * (c) 2013, dotfold
 */
var Server 			= require('./net/server')
  , StreamingClient	= require('./net/streamingclient')

  , args 	= process.argv.slice(2)
  , sockly 	= exports
  , log 	= require('./log/logger').getLogger('sockly.main')

//
// Welcome message
console.log('\n\tSockly.js - \u00A9 2013\n');
log.debug('starting...');

//
// ### function start
// Starts the sockly service by creating a connection
// to statsd and listening for TCP packets
sockly.start = function() {
	
	var client = new StreamingClient();	// options
	client.createSocket();
	
	var server = new Server();			// options
	server.connect();
	server.on('connected', function() {
		log.debug('received connected event');
	});

	// pipe input through to client
	server.pipe(client);
}

var cmd = args[0] ? args[0].toLowerCase : '';

// 
// Inspect the startup arguments for the command to run
// 

switch(cmd) {

	//
	// Default command, starts the sockly service
	// 
	case 'start' :
		sockly.start();
		break;

	// TODO help to stdout
	// TODO config

	default : 
		log.debug('process args, no command found. Run default command \'start\'', args);
		sockly.start();
}
