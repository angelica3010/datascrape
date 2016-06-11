// Double check against the layout in models (for Article.js and Note.js) and the data spit against 
// the collection to show if we are appending/capturing all of the data

// Collections Spit out
// > show collections
// articles
// > db.articles.find()
// { "_id" : ObjectId("575b2518c058c25dabc3e3c1"), "title" : "jQuery 3.0 Final Released!", "link" : "http://blog.jquery.com/2016/06/09/jquery-3-0-final-released/", "__v" : 0 }

// Remember you can't direclty go on a post route, so you can't go  to localhost:3006/note

// added note here to match article.js file
$.getJSON('/articles', function(data) {
  for (var i = 0; i<data.length; i++){
    $('#articles').append('<p data-id="' + data[i]._id + '">'+ data[i].title + '<br />'+ data[i].link + data[i].note +'</p>');
  
  }
});

// added the delete note here
$(document).on('click', 'p', function(){
  $('#notes').empty();
  var thisId = $(this).attr('data-id');

  $.ajax({
    method: "GET",
    url: "/articles/" + thisId,
  })
    .done(function( data ) {
      console.log(data);
      $('#notes').append('<h2>' + data.title + '</h2>');
      $('#notes').append('<input id="titleinput" name="title" >');
      $('#notes').append('<textarea id="bodyinput" name="body"></textarea>');
      $('#notes').append('<button data-id="' + data._id + '" id="savenote">Save Note</button>');
      // added the delete note here
      $('#notes').append('<button data-note="' +data.note+ '" id="deletenote">Delete Note</button>');


      if(data.note){
        $('#titleinput').val(data.note.title);
        $('#bodyinput').val(data.note.body);
      }
    });
});

$(document).on('click', '#savenote', function(){
  var thisId = $(this).attr('data-id');

  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      title: $('#titleinput').val(),
      body: $('#bodyinput').val()
    }
  })
    .done(function( data ) {
      console.log(data);
      $('#notes').empty();
    });


  $('#titleinput').val("");
  $('#bodyinput').val("");
});


//Use the savenote click button for reference and double chaeck against server.js for the delete route
$(document).on('click', '#deletenote', function(){

    var specificnotedelete = $(this).attr('data-note');


  $.ajax({
    method: "POST",
    url: "/delete/" + specificnotedelete,
    
    })
    .done(function( data ) {
      console.log(data);
      $('#notes').empty();
    });
  });

//Delete All Notes
$(document).on('click', '#deleteallnotes', function(){
  $.ajax({
    method: "POST",
    url: "/deletenotes/" ,
    
    })
    .done(function( data ) {
      console.log(data);
      $('#notes').empty();
    });
  });

// Show All Notes
$(document).on('click', '#showallnotes', function(){

// 
  $.ajax({
    method: "GET",
    url: "/showallnotes/" ,
    
    })
    .done(function( data ) {
      console.log(data);

      $('#notes').html(JSON.stringify(data))
      // $('#notes').empty();
    });
  });

