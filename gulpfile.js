var gulp = require('gulp')
var sass =  require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
var browserSync = require('browser-sync')

gulp.task('sass',function(){
	return gulp.src('app/scss/**/*.+(scss|sass)')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({
	      browsers: ['ie 8-9', 'last 2 versions']
		 }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream:true
		}))
})

gulp.task('watch',['browserSync','sass'],function(){
	gulp.watch('app/scss/**/*.+(scss|sass)', ['sass']);
	gulp.watch('app/*.html',browserSync.reload)
})

gulp.task('browserSync',function(){
	browserSync({
		server:{
			baseDir:'app'
		},
		port:8080,
		notify:false
	})
})