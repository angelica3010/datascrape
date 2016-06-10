// Changed database here to mongoosehwscraper
//Database configuration
var mongoose = require('mongoose');

var mongoosehwscraper_db = 'mongodb://localhost/mongoosehwscraper_db';
mongoose.connect('mongoosehwscraper_db');
var db = mongoose.connection;

db.on('error', function (err) {
console.log('Mongoose Error: ', err);
});

db.once('open', function () {
console.log('Mongoose connection successful.');
});

module.exports = mongoose;