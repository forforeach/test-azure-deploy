var gulp = require('gulp');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var replace = require('gulp-replace');

gulp.task('default', ['copy-jquery', 'copy-html']);

gulp.task('copy-jquery', () => {
    gulp.src('node_modules/jquery/dist/jquery.js')
        .pipe(gulpif(argv.production, uglify()))
        .pipe(gulpif(argv.production, rename({ suffix: '.min' })))
        .pipe(gulp.dest('dist/lib'));
});
gulp.task('copy-html', () => {
    gulp.src('index.html')
        .pipe(gulpif(argv.production, replace('jquery', 'jquery.min')))
        .pipe(gulp.dest('dist'));
});