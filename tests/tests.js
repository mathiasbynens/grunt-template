var grunt = require('grunt');

/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
		test.expect(numAssertions)
		test.done()
	Test assertions:
		test.ok(value, [message])
		test.equal(actual, expected, [message])
		test.notEqual(actual, expected, [message])
		test.deepEqual(actual, expected, [message])
		test.notDeepEqual(actual, expected, [message])
		test.strictEqual(actual, expected, [message])
		test.notStrictEqual(actual, expected, [message])
		test.throws(block, [error], [message])
		test.doesNotThrow(block, [error], [message])
		test.ifError(value)
*/

var compare = function(inputFile, expectedOutputFile, description, test) {
	var actual = grunt.file.read(inputFile);
	var expected = grunt.file.read(expectedOutputFile);
	test.equal(actual, expected, description);
	test.done();
};

exports.template = {
	'test-1': function(test) {
		compare(
			'tmp/test-1.js',
			'tests/expected/test-1.js',
			'Interpolation: <%=  %>',
			test
		);
	},
	'test-2': function(test) {
		compare(
			'tmp/test-2.js',
			'tests/expected/test-2.js',
			'<% _.forEach() %>',
			test
		);
	},
	'test-3': function(test) {
		compare(
			'tmp/test-3.js',
			'tests/expected/test-3.js',
			'Escape HTML: `<%- foo %>`',
			test
		);
	},
	'test-4': function(test) {
		compare(
			'tmp/test-4.js',
			'tests/expected/test-4.js',
			'Multiple template files',
			test
		);
	}
};
