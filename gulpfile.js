/**
* A cleaner gulpfile? Inspired by Thomas Boyt's maintainable Gruntfile approach
* which I've used for a while now, I think that a similar separated structure
* makes the most sense for application maintenance and growth. Thoughts?
* Thomas Boyt's article: http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
*
* Directory structure (assumes lib, need to modify to allow for config override):
*
* |    |--tasks/
* |        |--custom/         # Holds custom gulp tasks
* |          |--customapptask.js
* |        |--plugins/        # Holds plugin specific gulp tasks
* |          |--uglify.js         # Exports 'uglify' gulp task
* |    |--gulpfile.js
*
*/
var fs = require( "fs" ),
    path = require( "path" ),
    glob = require( "glob" ),
    deasync = require( "deasync" ),
    gulp = require( "gulp" ),
    plugins = require( "gulp-load-plugins" )(),
    tasks = {},
    done = false;

glob( path.join( __dirname, "tasks", "**/*.js" ),
      function ( err, files ) {
        var shortname;
        if ( err ) throw err;
        for ( var i = 0, l = files.length; i < l; i++ ) {
          files[ i ].replace( /([^/]+$)/, function ( full, filename ) {
            shortname = filename.substr( 0, filename.indexOf( "." ) );
          });
          tasks[ shortname ] = require( files[ i ] );
        }
        done = true;
      });

while ( !done ) {
  deasync.runLoopOnce();
}
