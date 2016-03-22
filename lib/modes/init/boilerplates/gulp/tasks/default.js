// The default task (called when you run `gulp` from cli)
// gulp.task('default', ['watch', 'scripts', 'images']);
var gulp = require( "gulp" );

module.exports = gulp.task( "default", [], function () {
  console.log( "Running default gulp task!" );
});
