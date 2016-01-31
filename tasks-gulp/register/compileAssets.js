module.exports = function (gulp, plugins) {
	gulp.task('compileAssets', function(cb) {
		plugins.sequence(
			'clean:dev',
			'javascript:dev',
			'less:dev',
			'copy:dev',
			cb
		);
	});
};
