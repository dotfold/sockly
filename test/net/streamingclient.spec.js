
var client = require('./../../lib/net/client')
  , expect = require('chai').expect
  , proxyquire = require('proxyquire')


var dgramStub = {
	'createSocket': function() {
		return { 
			socklyID: 's1',
			once: function() {},
			bind: function() {}
		};
	}
}

function resolve() {
	return proxyquire('./../../lib/client/client', {
		dgram: dgramStub
	})
}

describe('StreamingClient', function() {

	it('should be a Stream', function() {

	})

	it('should be writeable and not readable', function() {

	})

	describe('constructor', function() {

		it('should set port', function() {

		})

		it('should set host', function() {

		})

		it('should create socket', function() {

		})

	})

	describe('createSocket', function() {

		it('should create dgram socket', function() {

		})

		it('should add socket listeners', function() {
			
		})
	})

	describe('write', function() {

		it('should write no buffer if no parameter', function() {

		})

		it('should set bytes from buffer', function() {

		})

		it('should send buffer on socket', function() {

		})

	})

	describe('end', function() {

		it('should write buffer if provied', function() {

		})

		it('should set writeable to false', function() {

		})

	})

	describe('sendBytes', function() {

	})

	describe('destroy', function() {

		it('should set writeable to false', function() {

		})
	})





	xit('should create socket', function() {
		var sclient = new client.Client();
		sclient.createSocket();

		expect(sclient.socket).to.exist;
	})

	xdescribe('socket', function() {

		it('should create stub', function() {

			sclient = new c.resolve().Client();
			sclient.createSocket();
			
			expect(sclient.socket.socklyID).to.exist;

		})

		// spies

	})

})
