"use strict";
/**
 * PatternGuide Development Project Initializer
 *
 * This is meant to be ran on both existing, and brand-new projects.
 * This mode utilizes "inquirer" to create a nice CLI experience for
 * integrating PatternGuide into almost any project.
 * This will determine the necessary level of scaffolding required for
 * the project and then apply as selected.
 */
const inquirer = require( "inquirer" );

class Init {

  start ( type ) {

    // if a user passes a specific type in, let them scaffold a specific set
    // without going through the full prompt list.
    if ( type ) {

    }

    let questions = require( "./questions" );
    // let's get to asking some questions!
    inquirer.prompt( questions, function ( answers ) {
      console.log( "Answers", answers );
    } );

  }

}

module.exports = Init;
