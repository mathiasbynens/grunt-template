module.exports = function(grunt) {

	grunt.registerMultiTask('template', 'Interpolate template files with any data you provide and save the result to another file.', function() {
		// Merge task-specific and/or target-specific options with these defaults:
		var options = this.options({
			'data': {}
		});

		// Iterate over all specified file groups.
		this.files.forEach(function(file) {
			// Concat specified files.
			var src = file.src.filter(function(filePath) {
				// Warn on and remove invalid source files.
				if (!grunt.file.exists(filePath)) {
					grunt.log.warn('Source file `' + filePath + '` not found.');
					return false;
				} else {
					return true;
				}
			});
			if (!src.length) {
				grunt.log.warn('Destination `' + file.dest + '` not written because `src` files were empty.');
				return;
			}
			var template = src.map(function(filePath) {
				// Read file source.
				return grunt.file.read(filePath);
			}).join('\n');
			var data = typeof options.data == 'function' ?
				options.data() :
				options.data;
			var result = grunt.template.process(template, {
				'data': data
			});

			// Write the destination file
			grunt.file.write(file.dest, result);

			// Print a success message
			grunt.log.writeln('File `' + file.dest + '` created.');
		});
	});

};
