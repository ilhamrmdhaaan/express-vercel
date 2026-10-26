// const express = require('express');
// const app = require('./bin/app/app');


// const app = express();
// module.exports = app;


const express = require('express');
const app = express();

try {
  app.use(require('./bin/app/app'));
} catch (e) {
  app.use((req, res) => res.status(500).send('<pre>' + e.stack + '</pre>'));
}

module.exports = app;