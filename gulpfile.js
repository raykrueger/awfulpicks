var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    
    $ = require('gulp-load-plugins')(),
    
    jsFiles = ['gulpfile.js', 'app.js', 'routes/**/*.js', 'public/javascripts/**/*.js', 'bin/www'];


/**
 * Linting
 *
 * Tests for code quality and source standards.
 */
gulp.task('jshint', function() {
    return gulp.src(jsFiles)
        .pipe(browserSync.reload({
            stream : true,
            once   : true
        }))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});


/**
 * Code Style
 *
 * Tests for code style accuracy.
 */
gulp.task('jscs', function() {
    return gulp.src(jsFiles)
        .pipe($.jscs());
});


/**
 * Test
 *
 * Tests the application.
 */
gulp.task('test', ['jscs', 'jshint'], function() {
    return;
});


/**
 * Build
 *
 * Tests and builds the application.
 */
gulp.task('build', ['test'], function() {
    return;
});
