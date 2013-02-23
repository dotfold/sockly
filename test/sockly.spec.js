// socklyserver.spec.js


var sockly = require('./../sockly');

describe('sockly', function() {

	describe('exports', function() {

		it('should have start function', function() {
			expect(sockly.start).toBeDefined();
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
