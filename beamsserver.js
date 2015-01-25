/*

Beams v0.1.2 (Beta)
Copyright (c) 2014-2015 Peter McKay
Free to use under the MIT license.

*/


var express = require('express');
var fs = require ('fs');
var app = express();
var oneDay = 86400000; // The number of milliseconds in one day...

fs.readFile('/site/img', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
}); // Read image files...

fs.readFile('/site/video', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
}); // Read video files...

app.use(express.static(__dirname + '/site', { maxAge: oneDay })); // Serve up site content...

app.listen(process.env.PORT || 80);

console.log('Eureka! Server is running at port 80.');
