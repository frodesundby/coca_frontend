
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-cssnano');
var size = require('gulp-size')

var paths = {
  htmlSource: ['./src/index.html', './src/build.html'],
  cssSource: ['./src/stylesheets/**/*.css', 'node_modules/font-awesome/css/font-awesome.min.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css'],
  jsSource: ['./src/js/**/*.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js'],
  imgSource: './src/images/**/*.*',
  fontSource: ['./src/fonts/**/*', './node_modules/font-awesome/fonts/**/*'],
  htmlBuild: './public',
  jsBuild: './public/javascripts',
  imgBuild: './public/images',
  cssBuild: './public/stylesheets',
  fontBuild: './public/fonts'
}

gulp.task('watch-folder', function() {  
  gulp.watch(paths.htmlSource, ['copy-html']);
});
gulp.task('watch-css', function() {  
  gulp.watch(paths.cssSource, ['copy-css']);
});

gulp.task('copy-html', function() {  
  gulp.src(paths.htmlSource)
    .pipe(gulp.dest(paths.htmlBuild));
});

gulp.task('copy-js', function() {  
  gulp.src(paths.jsSource)
    .pipe(gulp.dest(paths.jsBuild));
});


gulp.task('copy-img', function() {  
  gulp.src(paths.imgSource)
    .pipe(gulp.dest(paths.imgBuild));
});

gulp.task('copy-fonts', function() {  
  gulp.src(paths.fontSource)
    .pipe(gulp.dest(paths.fontBuild));
});

gulp.task('copy-css', function() {  
  gulp.src(paths.cssSource)
    .pipe(gulp.dest(paths.cssBuild));
});

/*gulp.task('bundle-css', function () {
    return gulp.src([paths.extCss, paths.cssSource])
        .pipe(concat('bundle.css'))
        .pipe(minifyCSS())
        .pipe(size())
        .pipe(gulp.dest(paths.cssBuild));
});
*/
gulp.task('default', ['copy-html', 'copy-js', 'copy-css', 'copy-img', 'copy-fonts', 'watch-folder', 'watch-css'], function() {
})
