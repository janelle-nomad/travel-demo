var gulp = require('gulp'), 
watch = require('gulp-watch'),  //Assign watch variable to gulp-watch function
postcss = require('gulp-postcss'), 
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

//Create a default task
gulp.task('styles', function() {
   return gulp.src('./app/assets/styles/styles.css') //gulp.src is an asyncronist function
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'))
    });
    
gulp.task('watch', function() {
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});
