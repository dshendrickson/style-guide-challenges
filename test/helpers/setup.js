require('babel-register')({
  presets: ['react', 'es2015']
});

require('babel-polyfill');

global.document = require('jsdom').jsdom(`
  <head>
    <meta charset='UTF-8'>
    <title>NPM Template</title>
  </head>
  <body>
    <div id='react-container'></div>
  </body>
`);

global.window = document.defaultView;
global.navigator = window.navigator;
