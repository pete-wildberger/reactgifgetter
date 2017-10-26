const express = require('express'),
  path = require('path'),
  app = express(),
  bodyParser = require('body-parser');

const port = process.env.PORT || 3004;

app.use(express.static('client/build'));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get('*', (req, res) => {
  console.log('base url hit');
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, function() {
  console.log('up 3004');
});
