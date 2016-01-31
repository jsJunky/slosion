var fs = require("fs");
var browserify = require("browserify");
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var through2 = require('through2');

module.exports = function (gulp, plugins, growl) {
	gulp.task('javascript:dev', function () {
		return gulp.src(['./assets/js/**/*.js', '!./assets/js/dependencies/**/*.js'])
			.pipe(through2.obj(function (file, enc, next){
	            browserify(file.path)
	                .transform("babelify", {presets: ["es2015", "react"]})
	                .bundle(function(err, res){
	                    // assumes file.contents is a Buffer
	                    file.contents = res;
	                    next(null, file);
	                });
	        }))
		    .pipe(gulp.dest('./assets/build/'));
	});
	 
	gulp.task('babel:build', function () {
	  return gulp.src('src/app.js')
	    .pipe(babel())
	    .pipe(gulp.dest('dist'));
	});
}