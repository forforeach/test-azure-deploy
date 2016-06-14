var gulp = require('gulp');

gulp.task('build', () => {
    gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('scripts/lib'));
});