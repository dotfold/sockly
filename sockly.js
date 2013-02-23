
/**
 * sockly.js:	Entry point for sockly lib
 *
 * (c) 2013, dotfold
 */
var log 	= require('./lib/logging').getLogger('sockly')
  , cm		= require('./lib/configmanager')
  , net 	= require('./lib/net')
  , args 	= process.argv.slice(2)
  , sockly 	= exports

//
// Welcome message
console.log('\n\tSockly.js - \u00A9 James McNamee 2013\n');
log.debug('starting...');

//
// ### function start
// Starts the sockly service by creating a connection
// to statsd and listening for TCP packets
sockly.start = function() {
	net.createServer();
}

// 
// Inspect the startup arguments for the command to run
// 
switch(args[0].toLowerCase()) {

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
