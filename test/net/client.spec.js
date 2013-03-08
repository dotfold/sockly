
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

describe('client', function() {

	it('should create socket', function() {
		var sclient = new client.Client();
		sclient.createSocket();

		expect(sclient.socket).to.exist;
	})

	describe('socket', function() {

		it('should create stub', function() {

			sclient = new c.resolve().Client();
			sclient.createSocket();
			
			expect(sclient.socket.socklyID).to.exist;

		})

		// spies

	})

})
