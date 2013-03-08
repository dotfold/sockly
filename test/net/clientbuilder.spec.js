
var clientbuilder	= require('./../../lib/net/clientbuilder')
  , expect			= require('chai').expect

describe('exports', function() {
	it('should have getBuilder', function() {
		expect(clientbuilder.getBuilder).to.exist;
	})
})

describe('clientbuilder', function() {

	var builder;
	beforeEach(function() {
		builder = clientbuilder.getBuilder();
	})

	it('should build with defaults', function() {
		var client = builder.build();

		expect(client.host).to.equal('localhost');
		expect(client.port).to.equal(8125);
	})

	it('should build with specified host', function() {
		var client = builder.withHost('127.0.0.1').build();
		expect(client.host).to.equal('127.0.0.1');
	})

	it('should build with specified port', function() {
		var client = builder.withPort(9999).build();
		expect(client.port).to.equal(9999);
	})

})