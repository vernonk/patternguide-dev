"use strict";

var gulp = require( "gulp" ),
    uglify = require( "gulp-uglify" );

module.exports = gulp.task( "uglify", function () {
  return gulp.src( "define/in/project/config" )
            .pipe( uglify() )
            .pipe( gulp.dest( "define/in/config" ) );
});
