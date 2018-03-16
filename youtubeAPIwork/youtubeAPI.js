$(document).ready(function() {

	function start() {
	  // 2. Initialize the JavaScript client library.
	  gapi.client.init({
	    'apiKey': 'AIzaSyBgARLeUQyDpTCf84mYQT9NA8cB_5WuJqQ',
	    // clientId and scope are optional if auth is not required.
	    'clientId': '863246414592-pvgtql6n8n666206l1sm335c11a0qgup.apps.googleusercontent.com',
	    'scope': 'profile',
	  }).then(function() {
	    // 3. Initialize and make the API request.
	    return gapi.client.request({
	      'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
	    })
	  }).then(function(response) {
	    console.log(response.result);
	  }, function(reason) {
	    console.log('Error: ' + reason.result.error.message);
	  });
	};
	// 1. Load the JavaScript client library.
	gapi.load('client', start);


	$("form").on("submit", function(e) {
		e.preventDefault();

		// Prepare request!

		var request = gapi.client.youtube.search.list({
			part: "snippet",
			type: "video",
			q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
			maxResults: 3,
			order: "viewCount",
			publishedAfter: "2000-01-01T00:00:00Z"
		});
		// Execute request
		request.execute(function(response) {
			console.log(response);
		});
	});

});

// $(".submit").on("click", function() {

// 	// Create variable that becomes the query for the queryURL
// 	var input = $(".input-text").val();

// 	console.log('you searched for' + input);

// 	// Clear the search field
// 	$(".input-text").val("");

// 	var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + input + "&key=AIzaSyBy5QMfVzgflpbdmxpDpbCfIFbh4wCKluI";

// 	$.ajax({
// 		url: queryURL,
// 		method: "GET"
// 	})
// 	.then(function(response) {
// 		buildApiRequest('GET',
//                 '/youtube/v3/search',
//                 {'maxResults': '25',
//                  'part': 'snippet',
//                  'q': 'surfing',
//                  'type': ''});
// 	})

//  });



function googleApiClientReady() {
	gapi.client.setApiKey("AIzaSyBgARLeUQyDpTCf84mYQT9NA8cB_5WuJqQ");
	gapi.client.load("youtube", "v3", function() {
		// YT API is ready!
	});
}