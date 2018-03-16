$(document).ready(function () {

  $("#submit-search").on("click", function (event) {

  event.preventDefault();
    
  var search = $("#search-input").val().trim();
  var queryString = "https://api.vimeo.com/videos?query=" + search + "&client_id=d0b4a83fc5c12570e9270fc54ef6ecabb8675fcf";

  $.ajax({
    url: queryString,
    method: "GET"
  })
    .then(function (response) {
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
      

        
      
        
        $("#append").append(results[i].embed.html);
      


   
       
        
    
      } 


    });

  
 

});

});

