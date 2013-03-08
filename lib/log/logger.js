
/**
 * logging.js:	Simple logger
 *
 * (c) 2013, dotfold
 */
var r = require('./../util/replacetokens')

//
// ### function _loggerImpl name
// #### @name {String} Name of this logger instance
// Logger object
// 
var _loggerImpl = function(name) {
	
	//
	// Name of this logger instance
	//
	this.name = name;

	//
	// Message token string
	// 
	_logTemplate = '{messageColor}{date} {level} - {nameColor}{name}{messageColor} - {message}{noColor}';

	//
	// Default token replace data
	// 
	var defaultData = {
		messageColor: '\033' + String.fromCharCode(27) + '[36m',
		nameColor: '\033' + String.fromCharCode(27) + '[33m',
		noColor: '\033' + String.fromCharCode(27) + '[39m'
	}

	//
	// Object `map` of colors to use for each LogLevel
	// 
	var colorsByLogLevel = {
		NONE	: '0',
		DEBUG	: '\033' + String.fromCharCode(27) + '[39m',	// white
		INFO	: '\033' + String.fromCharCode(27) + '[36m',	// cyan
		WARN	: '\033' + String.fromCharCode(27) + '[35m',	// magenta
		ERROR	: '\033' + String.fromCharCode(27) + '[31m'		// red
	}

	//
	// ### function _replaceTokens data
	// #### @data {Object} key value pairs to replace
	// Merges the supplied data object with defaults
	// 
	_replaceTokens = function(data) {

		for (var field in data) {
			defaultData[field] = data[field];
		}

		return r.replace(_logTemplate, defaultData)
	}

	//
	// ### function _formateDate date
	// #### @date Date object
	// Formats the supplied Date object to a human readable string for output.
	_formatDate = function(date) {

		return date.toDateString() + ' '
			+ date.getHours()+ ':'
			+ date.getMinutes() + ':'
			+ date.getSeconds();
	}

	//
	// ### function _log level, msg
	// #### @level {String} LogLevel for this message
	// #### @msg {String} The message to log to stdout
	// Formats a message with date, name and message and
	// outputs the result to the console
	// 
	_log = function(level, msg) {
		var date = new Date();
		var replaced = _replaceTokens({
			messageColor: colorsByLogLevel[level],
			date: _formatDate(date),
			level: level,
			name: this.name,
			message: msg
		})

		console.log(replaced);
	}
}

_loggerImpl.prototype = {

	//
	// ### function debug msg, args
	// #### @msg {String} message to log
	// #### @args {Array} any arguments to append to log
	// Outputs a DEBUG level message to the console.
	// 
	debug: function(msg, args) {
		_log.call(this, 'DEBUG', msg);
	},

	//
	// ### function info msg, args
	// #### @msg {String} message to log
	// #### @args {Array} any arguments to append to log
	// Outputs an INFO level message to the console.
	// 
	info: function(msg, args) {
		_log.call(this, 'INFO', msg);
	},

	//
	// ### function warn msg, args
	// #### @msg {String} message to log
	// #### @args {Array} any arguments to append to log
	// Outputs a WARN level message to the console.
	// 
	warn: function(msg, args) {
		_log.call(this, 'WARN', msg);
	},

	//
	// ### function error msg, args
	// #### @msg {String} message to log
	// #### @args {Array} any arguments to append to log
	// Outputs an ERROR level message to the console.
	// 
	error: function(msg, args) {
		_log.call(this, 'ERROR', msg);
	}

}

//
// ### function getLogger name
// #### @name {String} the name of this logger instance
// Creates a new logger object with the given name.
// The name is used in the output, the following template is used:
// <Date> <Level> - <name> - <message>
// 
exports.getLogger = function(name) {
	return new _loggerImpl(name);
}

