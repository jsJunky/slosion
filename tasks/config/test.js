module.exports = function(grunt) {
	grunt.config.set('test', {
		mochaTest: {
	      test: {
	        options: {
	          reporter: 'spec',
	          captureFile: 'results.txt', // Optionally capture the reporter output to a file
	          quiet: false, // Optionally suppress output to standard out (defaults to false)
	          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
	        },
	        src: ['assets/js/**/*.spec.js']
	      }
	    }
	});

	grunt.loadNpmTasks('grunt-mocha-test');
};
