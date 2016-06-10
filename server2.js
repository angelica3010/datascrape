// var request = require('request');
// var cheerio = require('cheerio');


// request('https://www.nhl.com/', function (error, response, html) {

//   var $ = cheerio.load(html);
//   var result = [];
//   $('h4.headline-link').each(function(i, element){

//       var title = $(this).text();
//       var link = $(element).parent().attr('href');
      
//       result.push({
//         title:title,
//         link:link
//       });
//     });
//   console.log(result);
// });


// var request = require('request');
// var cheerio = require('cheerio');


// request('http://www.hostelbookers.com/search/city/14/arr/2016-06-16/ngt/3/ppl/1/', function (error, response, html) {

//   var $ = cheerio.load(html);
//   var result = [];
//   $('list-only prop-name').each(function(i, element){

//       var title = $(this).text();
//       var link = $(element)[1].attr('href');
      
//       result.push({
//         title:title,
//         link:link
//       });
//     });
//   console.log(result);
// });


var request = require('request');
var cheerio = require('cheerio');


request('http://www.hostels.com/paris/france?dateFrom=2016-06-11&dateTo=2016-06-14&guestCount=2&homepageSearchType=dropdown', function (error, response, html) {

  var $ = cheerio.load(html);
  var result = [];
  $('h2').each(function(i, element){
    console.log('found an h2')

    
    });
   });
  
//   // console.log(result);
// });

