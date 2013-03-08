// socklyserver.spec.js


var sockly 		= require('./../lib/sockly')
  , expect 		= require('chai').expect

describe('sockly', function() {

	describe('exports', function() {

		it('should have start function', function() {
			expect(sockly.start).to.exist;
		});
	});

});
