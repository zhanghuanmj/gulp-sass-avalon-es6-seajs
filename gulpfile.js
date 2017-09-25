/**
 * Created by zh on 2017/9/13.
 */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var size = require('gulp-size');
var prefix = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var del = require('del');
var vinylPaths  = require('vinyl-paths');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sassLint = require('gulp-sass-lint');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var babel = require("gulp-babel");


/******基础路径************************/
var bases = {
  src: "src/",
  dist: "dist/"
};

/******sass编译配置************************/
var sassOptions = {
  outputStyle: 'expanded'
};

/******浏览器前缀配置************************/
var prefixerOptions = {
  browsers: ['last 2 versions']
};

/******错误输出方法************************/
var onError = function(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "Error: <%= error.message %>",
    sound:    "Basso"
  })(err);
  this.emit('end');
};

/******浏览器同步************************/
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: bases.dist
    },
    port: 8000
  });
});

/******清除dist文件夹************************/
gulp.task('clean:dist', function() {
  return gulp.src(bases.dist)
    .pipe(vinylPaths(del));
});

/******样式编译************************/
gulp.task('styles', function() {
  return gulp.src(bases.src + 'sass/**/*.scss')
    .pipe(plumber({errorHandler: onError}))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(prefix(prefixerOptions))
    /*.pipe(gulp.dest(bases.dist + 'css'))
    .pipe(gulp.dest(bases.src + 'css'))
    .pipe(reload({stream:true}))*/
    .pipe(cleanCSS({debug: true}, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(size({ gzip: true, showFiles: true }))
    /*.pipe(rename({ suffix: '.min' }))*/
    .pipe(gulp.dest(bases.dist + 'css'))
    .pipe(gulp.dest(bases.src + 'css'))
    .pipe(reload({stream:true}));
});

/******src下js压缩************************/
gulp.task('js-src', function() {
  gulp.src(bases.src + 'js/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(size({ gzip: true, showFiles: true }))
    /*.pipe(concat('app.js'))//合并*/
    .pipe(gulp.dest(bases.dist + 'js'))
    .pipe(reload({stream:true}));
});

/******index.js压缩************************/
gulp.task('js-index', function() {
  gulp.src(bases.src + 'index.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(gulp.dest(bases.dist))
    .pipe(reload({stream:true}));
});

/******libs下js压缩************************/
gulp.task('js-libs', function() {
  gulp.src([bases.src + 'libs/**/*.js'])
    .pipe(uglify())
    .pipe(size({ gzip: true, showFiles: true }))
    /*.pipe(concat('libs.js'))//合并*/
    .pipe(gulp.dest(bases.dist + 'libs'))
    .pipe(reload({stream:true}));
});

/******复制文件************************/
gulp.task('copy', function() {

  // 把src下的静态文件复制到dist下
  gulp.src(bases.src + 'assets/**/*.*')
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(gulp.dest(bases.dist + 'assets'))
    .pipe(reload({stream:true}));

  gulp.src(bases.src + 'libs/**/*.*')
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(gulp.dest(bases.dist + 'libs'))
    .pipe(reload({stream:true}));

});

/******sass代码审查************************/
gulp.task('sass-lint', function() {
  gulp.src([bases.src + 'scss/**/*.scss'])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

/******html文件压缩************************/
gulp.task('minify-html', function() {
  gulp.src(bases.src + 'html/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(bases.dist + 'html'))
    .pipe(reload({stream:true}));
});

/******index.html文件压缩************************/
gulp.task('minify-index-html', function() {
  gulp.src(bases.src + 'index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(bases.dist))
    .pipe(reload({stream:true}));
});

/******img文件压缩************************/
gulp.task('imagemin', function() {
  return gulp.src(bases.src + 'img/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(bases.dist + 'img'));
});


/******watch监听************************/
gulp.task('watch', function() {
  gulp.watch(bases.src + 'sass/**/*.scss', ['styles']);
  gulp.watch(bases.src + 'html/**/*.html', ['minify-html']);
  gulp.watch(bases.src + 'index.html', ['minify-index-html']);
  gulp.watch(bases.src + 'img/*', ['imagemin']);
  gulp.watch(bases.src + 'js/**/*.js', ['js-src']);
  gulp.watch(bases.src + 'index.js', ['js-index']);
});

/******gulp默认任务************************/
gulp.task('default', function(done) {
  runSequence('clean:dist', 'browser-sync', 'js-index', 'js-src', 'imagemin', 'minify-index-html', 'minify-html', 'styles', 'copy', 'watch', done);
});

/******gulp编译任务************************/
gulp.task('build', function(done) {
  runSequence('clean:dist', 'js-index', 'js-src', 'imagemin', 'minify-index-html', 'minify-html', 'styles', 'copy', done);
});