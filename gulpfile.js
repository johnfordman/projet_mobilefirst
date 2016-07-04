var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');
	browserSync = require('browser-sync').create();
	

gulp.task('css', function() {
        return sass('assets/sass/*.scss',{sourcemap: true}, { style: 'expanded' })
        .pipe(autoprefixer("> 1%", "last 2 versions"," Firefox ESR"," Opera 12.1"))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream({match: 'dist/*.css'}))
        .pipe(notify({ message: 'css task complete' }));    
});

gulp.task('cssmin', function() {
    return sass('assets/sass/main.scss',{ style: 'expanded' })
    .pipe(autoprefixer("> 1%", "last 2 versions"," Firefox ESR"," Opera 12.1"))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'css min task complete' })); 
});

gulp.task('scripts', function() {
  return gulp.src('assets/scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});
gulp.task('scripts-libs', function() {
    return gulp.src('assets/scripts/libs/**/*.js')
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('dist/scripts'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('watch', function() {
	
	 browserSync.init({
         proxy: "localhost:80/projet_mobilefirst"
        //server: {
        //    baseDir: "./"
        //}
    });
  
  gulp.watch('assets/sass/**/*.scss', ['css']);
  gulp.watch("dist/css/*.css").on('change', browserSync.reload);
  gulp.watch('assets/scripts/**/*.js', ['scripts']);
  gulp.watch('assets/scripts/libs/**/*.js',['scripts-libs']);


});    