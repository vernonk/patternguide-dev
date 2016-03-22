

/*
if it's require()'d, what does patternguide expose?
what does that interface look like for dev workflow?

var pgDev = require( "patternguide-dev" );

pgDev.server.start({ port: 3000, forever: true });

pgDev.compile( "sass" );
pgDev.compile( "js" );

pgDev.build( "prod" );
pgDev.build( "staging" );
pgDev.build( "model" );
pgDev.build( "dev" );

pgDev.lint();
pgDev.lint( glob );

...
...
...

*/
var pgDev = {
  server: require( "./modes/server" )
};


module.exports = pgDev;
