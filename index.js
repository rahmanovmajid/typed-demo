const express = require('express');
const app = express();

const path = require('path');

const Typed = require('typed.js');

const port = 5000;

// app.get('/', (req, res, next) => {
//   try {
//     console.log(Typed);
//   } catch (err) {
//     console.error(err);
//   }
// });

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
