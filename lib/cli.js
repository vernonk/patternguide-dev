#!/usr/bin/env node --harmony

/*
PatternGuide Front-end Development Workflow
*/

const cli = require( "cli" ),
      chalk = require( "chalk" ),
      express = require( "express" );

var app = require( "./app" );

cli.parse({
  requestProxy: [ "rp", "Request Proxy", "string" ]
});

cli.main(function ( args, opts ) {

  var app = express();

  app.get( "/", function ( req, res ) {
    res.send( "hello homepage" );
  });

  app.listen( 4242, function () {
    cli.ok( "PatternGuide Development workflow running..." );
  })

});
