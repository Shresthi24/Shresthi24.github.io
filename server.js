var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('index-green.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index-green.html'));
});

app.get('index-gray.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index-gray.html'));
});

app.get('index-orange.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index-orange.html'));
});

app.get('tm-bg-slide-1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tm-bg-slide-1.jpg'));
});

app.get('tm-bg-slide-2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tm-bg-slide-2.jpg'));
});

app.get('tm-bg-slide-3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tm-bg-slide-3.jpg'));
});

app.get('tm-easy-profile.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tm-easy-profile.jpg'));
});

app.get('bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.min.css'));
});

app.get('font-awesome.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'font-awesome.min.css'));
});

app.get('templatemo-blue.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'templatemo-blue.css'));
});

app.get('templatemo-gray.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'templatemo-gray.css'));
});

app.get('templatemo-orange.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'templatemo-orange.css'));
});

app.get('templatemo-green.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'templatemo-green.css'));
});

app.get('._font-awesome.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '._font-awesome.css'));
});

app.get('bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.min.js'));
});

app.get('custom.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'custom.js'));
});

app.get('jquery.backstretch.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.backstretch.min.js'));
});

app.get('jquery.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.js'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
