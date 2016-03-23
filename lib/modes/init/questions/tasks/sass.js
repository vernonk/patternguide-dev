/**
* Questions that drive Sass task generation and configuration.
**/
module.exports = [
  {
    "type": "list",
    "name": "sassStart",
    "message": "Does your project use Sass?",
    "default": 0,
    "choices": [
      {
        "name": "Yes",
        "value": 1
      },
      {
        "name": "No",
        "value": 0
      }
    ]
  },
  {
    "type": "input",
    "name": "sassWatchGlob",
    "message": "What file patterns should PatternGuide watch for Sass changes? (Glob patterns allowed)",
    "when": function ( answers ) {
        if ( answers.sassStart ) {
          return true;
        }
    },
    "validate": function ( input ) {
      // validate that patterns are appropriate
      // once this is working, abstract as util to share
      // across all these types of things
      return true;
    }

  }
];
