$(document).ready(function () {

  $("#submit-search").on("click", function (event) {

    event.preventDefault();
    $("#SeatGeek-append").empty();
  
    
  var search = $("#search-length").val().trim();
  var queryString = "https://api.seatgeek.com/2/events?client_id=MTA3OTI2MTR8MTUyMDM5Mjg4Ni42NQ&q=" + search;

  $.ajax({
    url: queryString,
    method: "GET"
  })
    .then(function (response) {
      var results = response.events;
      for (var i = 0; i < results.length; i++) {
        // console.log(results[i].title);

        // var title = $("<h1>").text(results[i].title);
        var title = results[i].title;
        var links = `<a href=${results[i].url}>More Info</a>`;

        // var links = $("<a>").attr("href", results[i].url ).text("Testing")
       
        

        // var links = $("<a>")
        //   .attr("href", results[i].url)
        //   .text("More Info");
      
        // var link = results[i].url;
      // var images = $("<img>").attr("src", results[i].performers[0].image);

        var image = results[i].performers[0].image;

        var city = results[i].venue.city;
        var state = results[i].venue.state;
        
  
        var images = "<img src=" + image + ">";
        
    
      
        
        $("#SeatGeek-append").append("<li>" + "Title: "+  title + "<br>" +"Location: " + city + ", " + state + "<br>" + images + "<br>" + links + "</li >").load("search.html");
          


   
       
        
        // +"< /a>"
        // $("#append").append("<li>" + results[i].title + "<br>" + "<a href=\>" + results[i].url + "</li >");
       
          
        
        
        // $("#append > #title").append("<li>" + results[i].title + results[i].url + "</li>");
      } 


    });

  
 

});

});

