const express = require('express'),
  path = require('path'),
  app = express();

const port = process.env.PORT || 3004;

app.use(express.static('client/build'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, function() {
  console.log('up 3004');
});
