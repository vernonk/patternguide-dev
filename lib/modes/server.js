"use strict";

const cli = require( "cli" ),
      express = require( "express" );

class Server {
  constructor ( opts ) {
    this.port = 4242;
  }

  start () {
    let app = express(),
        config;

  //       args
  // [ 'compile:glob/**/*.js' ]

    app.get( "/", function ( req, res ) {
      res.send( "hello homepage" );
    });

    app.listen( 4242, function () {
      cli.ok( "PatternGuide Development workflow running..." );
    });
  }
}


module.exports = Server;
