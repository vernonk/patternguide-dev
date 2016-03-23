/**
* Questions that drive PostCSS task generation and configuration.
**/
module.exports = [
  {
    "type": "list",
    "name": "postcssStart",
    "message": "Does your project use PostCSS?",
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
    "name": "postcssWatchGlob",
    "message": "What file patterns should PatternGuide watch for CSS changes? (Glob patterns allowed)",
    "when": function ( answers ) {
        if ( answers.postcssStart ) {
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
