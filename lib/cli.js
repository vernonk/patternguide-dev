#!/usr/bin/env node --harmony
/*
PatternGuide Front-end Development Workflow

patternguide-dev server --port=3000 --forever

patternguide-dev compile
patternguide-dev compile:sass
patternguide-dev compile:js

patternguide-dev build
patternguide-dev build:prod
patternguide-dev build:staging
patternguide-dev build:model
patternguide-dev build:dev

patternguide-dev lint
patternguide-dev lint:glob

patternguide-dev test
patternguide-dev test:spec
patternguide-dev test:coverage (*reserved word?)

patternguide-dev imagemin
patternguide-dev imagemin:glob

*/
"use strict";

const cli = require( 'cli' ),
      yargs = require( 'yargs' ),
      chalk = require( 'chalk' ),
      express = require( 'express' ),
      gulp = require( 'gulp' ),
      handleIo = require( './utils/io-output' ),
      path = require( "path" ),
      patternguide = require( './main' );


// option flags
cli.parse({
  requestProxy: [ 'rp', 'Request Proxy', 'string' ]
});

cli.main(function ( args, opts ) {
  // consider making this dynamic off of file structure reads
  // but for now just keep it simple in an array.
  let definedModes = [ 'init', 'server' ];

  cli.ok( 'Welcome to PatternGuide\'s Front-end Devlopment Workflow' );

  // every mode class should have a `start` method
  args.map(function ( mode ) {
    if ( definedModes.indexOf( mode ) ) {
      let Module = require( path.join( __dirname, 'modes', mode ) );
      new Module().start();
    }
  });

  // if no mode is passed, let's run the init mode
  if ( !args.length ) {
    let Init = require( path.join( __dirname, 'modes', "init" ) );
    cli.info( "No mode passed, starting PatternGuide Init" );
    new Init().start();
  }

});
