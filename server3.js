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



// // // this grabs only hostel.com but not the full URL of the website
// var request = require('request');
// var cheerio = require('cheerio');


// request('http://www.hostels.com/paris/france?dateFrom=2016-06-11&dateTo=2016-06-14&guestCount=2&homepageSearchType=dropdown', function (error, response, html) {

//   var $ = cheerio.load(html);
//   var result = [];
//   $('h2').each(function(i, element){
    
//     // console.log('found an h2')

//       var title = $(this).text();
//       var link = $('a').attr('href');

//         result.push({
//         title:title,
//         link:link
//         });
    
//           console.log(result);
//             console.log(link);

//             console.log(html);


        
     
//   });
//  });


// var request = require('request');
// var cheerio = require('cheerio');


// request('https://www.hostelz.com/hostels/France/Paris', function (error, response, html) {

//  var $ = cheerio.load(html);
//  var result = [];
//  $('a.listing').each(function(i, element){
   
//    // console.log('found an h2')

//      var title = $(this).text();
//     var link = $(element).parent().attr('href');

//        result.push({
//        title:title,
//        link:link
//        });
   
//          console.log(result);
//            console.log(link);

//            // console.log(html);


       
    
//  });
// });
        

var page = require('webpage').create();
page.open('http://www.hostels.com/paris/france?dateFrom=2016-06-11&dateTo=2016-06-14&guestCount=2&homepageSearchType=dropdown', function(status) {
  var title = page.evaluate(function() {
    return document.title;
  });
  console.log('Page title is ' + title);
  phantom.exit();
});  



