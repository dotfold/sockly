// replacetokens.spec.js

var expect = require('chai').expect
  , replacer 	= require('./../lib/util/replacetokens')

describe('replacetokens', function() {
	
	it('should replace simple token', function() {

		var template = 'Hello {name}';
		var data = { name: 'foo' };

		var expected = 'Hello foo';
		var result = replacer.replace(template, data);

		expect(expected).to.equal(result);
	})
	
	it('should replace multiple tokens', function() {
		var template = 'Hello {fname} {sname}';
		var data = { fname: 'foo', sname: 'bar' };

		var expected = 'Hello foo bar';
		var result = replacer.replace(template, data);

		expect(expected).to.equal(result);
	})
	
});