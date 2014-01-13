module.exports = function(grunt) {

	grunt.template.addDelimiters('handlebars-like-delimiters', '{{', '}}')

	grunt.initConfig({

		'clean': {
			'tests': ['tmp'],
		},

		// Configuration to be run and tested
		'template': {
			'test-1': {
				'options': {
					'data': {
						'foo': '"Hello world!"'
					}
				},
				'files': {
					'tmp/test-1.js': ['tests/fixtures/test-1.js']
				},
			},
			'test-2': {
				'options': {
					'data': {
						'people': ['John-David', 'Kit', 'Mathias']
					}
				},
				'files': {
					'tmp/test-2.js': ['tests/fixtures/test-2.js']
				},
			},
			'test-3': {
				'options': {
					'data': {
						'value': '<script>alert(1)</script>'
					}
				},
				'files': {
					'tmp/test-3.js': ['tests/fixtures/test-3.js']
				},
			},
			'test-4': {
				'options': {
					'data': {
						'root': 'lolwat',
						'rootValue': 'this',
						'foo': '/regexp?/g'
					}
				},
				'files': {
					'tmp/test-4.js': ['tests/fixtures/test-4-*.js']
				},
			},
			'test-5': {
				'options': {
					'data': function() {
						return {
							'root': 'lolwat',
							'rootValue': 'this',
							'foo': '/regexp?/g'
						};
					}
				},
				'files': {
					'tmp/test-5.js': ['tests/fixtures/test-5.js']
				},
			},
			'test-6': {
				'options': {
					'data': function() {
						return {
							'title': 'Custom Delimiters Support (Passing a string)',
							'author': 'grunt-template',
							'content': 'Custom delimiters defined with <a href="http://gruntjs.com/api/grunt.template#grunt.template.adddelimiters" target="_blank">grunt.template.addDelimiters</a> are supported too.'
						};
					},
					'delimiters': 'handlebars-like-delimiters'
				},
				'files': {
					'tmp/test-6.js': ['tests/fixtures/test-6.js']
				}
			},
			'test-7': {
				'options': {
					'data': function() {
						return {
							'title': 'Custom Delimiters Support (Passing a function)',
							'author': 'grunt-template',
							'content': 'Custom delimiters defined with <a href="http://gruntjs.com/api/grunt.template#grunt.template.adddelimiters" target="_blank">grunt.template.addDelimiters</a> are supported too.'
						};
					},
					'delimiters': function() {
						return 'handlebars-like-delimiters';
					}
				},
				'files': {
					'tmp/test-7.js': ['tests/fixtures/test-7.js']
				}
			}
		},

		// Unit tests
		'nodeunit': {
			'tests': ['tests/tests.js']
		}

	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('test', ['clean', 'template', 'nodeunit']);
	grunt.registerTask('default', ['test']);

};
