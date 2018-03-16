$(document).ready(function() {

// Initialize Firebase
var config = {
apiKey: "AIzaSyBgARLeUQyDpTCf84mYQT9NA8cB_5WuJqQ",
authDomain: "gitmusicyt.firebaseapp.com",
databaseURL: "https://gitmusicyt.firebaseio.com",
projectId: "gitmusicyt",
storageBucket: "gitmusicyt.appspot.com",
messagingSenderId: "863246414592"
};

firebase.initializeApp(config);

var database = firebase.database();

  $("#submit-search").on("click", function (event) {
    

    event.preventDefault();
   
    
    
		var artistInput = $("#search-length").val().trim();

    database.ref().push({
      artistInput: artistInput,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    })

		// Working client ID
		var queryURL = "https://api.vimeo.com/videos?query=" + artistInput + "&client_id=d0b4a83fc5c12570e9270fc54ef6ecabb8675fcf";

		$.ajax({
			url: queryURL,
			method: "GET"
		})
		.then(function(response) {
			var results = response.data;
      for (var i = 0; i < 3; i++) {
      	if (results[i].width == 640) {
      	// Create videoHolder to hold each video
      	var videoHolder = $("<div>");
      	// Add class and width to each videoHolder
      	// videoHolder.addClass("vid-holder").width(640);

      	//

      	// if (results[i].width > 640) {
      	// 	results[i].width(640);
      	// 	console.log("width of " + results[i] + "is" + results[i].width);
      	// }
      	// Append video to vid-holder
        videoHolder.append(results[i].embed.html);
        console.log("name is" + results[i].name);
        console.log("uri is" + results[i].uri);
        console.log("link is" + results[i].link);
        
        // Append videoHolder to append
        $("#append").append(videoHolder);
        }
      }
      
      
      });
  $("#button-holder").empty();
 database.ref().orderByChild("dateAdded").limitToLast(3).on('child_added', function (snapshot) {

 console.log(snapshot.val().artistInput);

 //
 artistInput = snapshot.val().artistInput;
 //
 // newBtn.addClass("btn my-2 my-sm-0 search-button-color");

 // // newBtn.addClass("btn search-button-color");

 // newBtn.text(artistInput);

 // console.log("what is artistInput[i]" + artistInput[i]);

 // $("#button-holder").append(newBtn);

 // var length = 3;

 // Looping through the array of movies
 // for (var i = 0; i < artistInput.length; i++) {
 // for (var i = 0; i < 3; i++) {

 // Then dynamicaly generating buttons for each movie in the array
 // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
 var a = $("<button>");
 // Adding a class of movie-btn to our button
 a.addClass("btn btn-outline-success my-2 my-sm-0 search-button-color search-button");
 // Adding a data-attribute
 // a.attr("data-name", artistInput[i]);
 // Providing the initial button text
 a.text(artistInput);
 // Adding the button to the buttons-view div
 $("#button-holder").append(a);
 console.log(artistInput);
 // }
 // console.log("db is " + database.length);

 });

 // Load 3 most recent searches

 // for (var i = 0; i < 3; i++) {

 //   // Create new button
 //   var newBtn = $("<button>")

 // Retrieve most recent search


 }



 );




  $(window).on('load', function () {

    database.ref().orderByChild("dateAdded").limitToLast(3).on('child_added', function(snapshot) {

      console.log(snapshot.val().artistInput);

      //
      artistInput = snapshot.val().artistInput;
      //
      // newBtn.addClass("btn my-2 my-sm-0 search-button-color");

      // // newBtn.addClass("btn search-button-color");

      // newBtn.text(artistInput);

      // console.log("what is artistInput[i]" + artistInput[i]);

    // $("#button-holder").append(newBtn);

      // var length = 3;

      // Looping through the array of movies
      // for (var i = 0; i < artistInput.length; i++) {
      // for (var i = 0; i < 3; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie-btn to our button
        a.addClass("btn btn-outline-success my-2 my-sm-0 search-button-color search-button");
        // Adding a data-attribute
        // a.attr("data-name", artistInput[i]);
        // Providing the initial button text
        a.text(artistInput);
        // Adding the button to the buttons-view div
        $("#button-holder").append(a);
        console.log(artistInput);
      // }
              // console.log("db is " + database.length);

    });

    // Load 3 most recent searches

    // for (var i = 0; i < 3; i++) {

    //   // Create new button
    //   var newBtn = $("<button>")
    
      // Retrieve most recent search
      

    }



  );

});