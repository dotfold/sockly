
/**
 * sockly.js:	Entry point for sockly lib
 *
 * (c) 2013, dotfold
 */
var net 	= require('./net/server')
  , args 	= process.argv.slice(2)
  // , cm		= require('./configmanager')
  , sockly 	= exports
  , log 	= require('./log/logger').getLogger('sockly')

//
// Welcome message
console.log('\n\tSockly.js - \u00A9 2013\n');
log.debug('starting...');

//
// ### function start
// Starts the sockly service by creating a connection
// to statsd and listening for TCP packets
sockly.start = function() {
	net.createServer();
}

var cmd = args[0] ? args[0].toLowerCase : '';

// TODO: config arg

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

	default : 
		log.debug('process args, no command found. Run default command \'start\'', args);
		sockly.start();
}
