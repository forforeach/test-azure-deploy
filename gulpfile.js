var gulp = require('gulp');

gulp.task('default', ['copy-jquery', 'copy-html']);

gulp.task('copy-jquery', () => {
    gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('dist/lib'));
});
gulp.task('copy-html', () => {
    gulp.src('index.html')
        .pipe(gulp.dest('dist'));
});