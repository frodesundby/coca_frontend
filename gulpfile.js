var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-cssnano');
var size = require('gulp-size');
var notify = require('gulp-notify');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify')
var gutil = require('gulp-util')
var watchify = require('watchify');
var browserify = require('browserify');
var reactify = require('reactify');

var env = process.env.NODE_ENV || 'development'


var paths = {
  entryPoint: './frontend/src/js/components/app.jsx',
  htmlSource: ['./frontend/src/index.html', './frontend/src/build.html'],
  cssSource: ['./frontend/src/stylesheets/**/*.css',
              'node_modules/font-awesome/css/font-awesome.min.css',
              'node_modules/bootstrap/dist/css/bootstrap.min.css',
              'node_modules/bootstrap/dist/css/bootstrap.min.css.map'],
  jsSource: ['./frontend/src/js/**/*.js',
              'node_modules/bootstrap/dist/js/bootstrap.min.js',
              'node_modules/jquery/dist/jquery.min.js'],
  imgSource: './frontend/src/images/**/*.*',
  fontSource: ['./frontend/src/fonts/**/*',
              './node_modules/font-awesome/fonts/**/*'],
  buildDir: './frontend/build',
  jsBuild: './frontend/build/js',
  imgBuild: './frontend/build/images',
  cssBuild: './frontend/build/stylesheets',
  fontBuild: './frontend/build/fonts'
}

var buildScript = function (file, watch) {
  var props = watchify.args;
  props.entries = [file];
  props.debug = true;

  var bundler = watch ? watchify(browserify(props)) : browserify(props)
  bundler.transform(reactify)

  var rebundle = function () {
    var errorHandler = notify.onError({
      title: "Compile Error",
      message: "<%= error.message %>"
    })
    var stream = bundler.bundle()
    return stream.on('error', errorHandler)
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(size())
        .pipe(gulp.dest(paths.buildDir + '/'))
  }

  bundler.on('update', function() {
    gutil.log('rebundling...')
    rebundle()
  })

  return rebundle()
}
gulp.task('watch-folder', function() {  
  gulp.watch(paths.htmlSource, ['copy-html']);
});
gulp.task('watch-css', function() {  
  gulp.watch(paths.cssSource, ['copy-css']);
});

gulp.task('copy-html', function() {  
  gulp.src(paths.htmlSource)
    .pipe(gulp.dest(paths.buildDir));
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
gulp.task('build', function() {
  return buildScript(paths.entryPoint, false)
})


gulp.task('default', ['build', 'copy-html', 'copy-js', 'copy-css', 'copy-img', 'copy-fonts', 'watch-folder', 'watch-css'], function() {
  return buildScript(paths.entryPoint, true)
})
