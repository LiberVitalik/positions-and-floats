var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.+(scss|sass)')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('app/sass/**/*.+(scss|sass)', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);
