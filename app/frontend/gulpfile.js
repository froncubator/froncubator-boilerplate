const gulp = require('gulp')
const less = require('gulp-less')
const concat = require('gulp-concat')

gulp.task('desktop_js', function() { 
    gulp.src(['./scripts/app.js',
    './scripts/controllers/*.js',
    './scripts/directives/*.js',
    './scripts/services/*.js'])
    .pipe(concat("build.js"))
    .pipe(gulp.dest('./build/scripts'))
});

gulp.task('desktop_fonts', function() {
    gulp.src(['./fonts/*'])
    .pipe(gulp.dest('./build/fonts'))
})

gulp.task('desktop_less', function() {
    gulp.src(['./styles/*.less'])
    .pipe(concat('build.less'))
    .pipe(less())
    .pipe(gulp.dest('./build/css'))
});

gulp.task('desktop_images', function() {
    gulp.src(['./images/**/*'])
    .pipe(gulp.dest('./build/images'))
});

gulp.task("desktop", function() {
    gulp.start('desktop_js')
    gulp.start('desktop_less')
    gulp.start('desktop_images')
    gulp.start('desktop_fonts')
})

gulp.task('watch', function() {
    gulp.watch(['./styles/**/*.less'], ['desktop_less'])
    gulp.watch(['./scripts/**/*.js'], ['desktop_js'])
})

gulp.task('default', function() {
    gulp.start('desktop')
})

gulp.task('watch', function() {
    gulp.start('watch')
})