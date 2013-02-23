// socklyserver.spec.js


var sockly = require('./../lib/sockly')
  , expect = require('chai').expect

describe('sockly', function() {

	describe('exports', function() {

		it('should have start function', function() {
			expect(sockly.start).to.exist;
		});
	});

	describe('process', function() {

		beforeEach(function() {
			// spy on exports
		});

		it('with start arg, should call start()', function() {

		});

		it('with no arg, should call start()', function() {

		});
	})

});
