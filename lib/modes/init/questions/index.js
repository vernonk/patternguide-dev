"use strict";
/**
* Bring our questions together
**/


/**
A question object is a hash containing question related values:

type: (String) Type of the prompt. Defaults: input - Possible values: input, confirm, list, rawlist, password
name: (String) The name to use when storing the answer in the answers hash.
message: (String|Function) The question to print. If defined as a function, the first parameter will be the current inquirer session answers.
default: (String|Number|Array|Function) Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
choices: (Array|Function) Choices array or a function returning a choices array. If defined as a function, the first parameter will be the current inquirer session answers. Array values can be simple strings, or objects containing a name (to display in list), a value (to save in the answers hash) and a short (to display after selection) properties. The choices array can also contain a Separator.
validate: (Function) Receive the user input and should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
filter: (Function) Receive the user input and return the filtered value to be used inside the program. The value returned will be added to the Answers hash.
when: (Function, Boolean) Receive the current user answers hash and should return true or false depending on whether or not this question should be asked. The value can also be a simple boolean.
*/

/**
* What does the scaffolding situation look like?

Gulp (any task below automatically depends on Gulp, note that on command line)
don't need to ... gulp is already a project dependency

Task Scaffolding:
  - Sass
  - Uglify
  - Babel (w/ ES2015 preset)
  - Autoprefixer
  - Jasmine
  - JSHint
  - Istanbul (Code Coverage)
  - imagemin
  - Browserify or webpack

File scaffolding:
  -

*/

const fs = require( "fs" ),
      path = require( "path" ),
      cli = require( "cli" );

let questions = [{
      type: "confirm",
      name: "gulpStart",
      message: "Will your project use Gulp to manage execute tasks?",
      default: false
    }],
    tasksPath = path.join( __dirname, "tasks" ),
    filesPath = path.join( __dirname, "files" ),
    // TODO: introduce async stuff, it's local, not worried about this right now.
    taskQuestionFiles = fs.readdirSync( tasksPath ),
    fileQuestionFiles = fs.readdirSync( filesPath );

taskQuestionFiles.map(function ( val ) {
  questions.push( require( tasksPath + "/" + val ) );
});

fileQuestionFiles.map(function ( val ) {
  questions.push( require( filesPath + "/" + val ) );
});

module.exports = questions;
