"use strict";

const gulp = require( "gulp" ),
      mocha = require( "gulp-mocha" );

module.exports = gulp.task( "mocha", function () {
  return gulp.src( "tests/*.js" )
            .pipe( mocha() );
});
