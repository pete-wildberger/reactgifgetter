const express = require('express'),
  path = require('path'),
  app = express();

const port = process.env.PORT || 3004;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(port, function() {
  console.log('up 3004');
});
