const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
//compile scss into css

function reload() {
  browserSync.reload();
}

function style() {
    return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        server: {
           baseDir: "./public",
           index: "./index.html"
        }
    });
    gulp.watch('./sass/**/*.scss', style)
    gulp.watch('./**/*.html').on('change',reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;