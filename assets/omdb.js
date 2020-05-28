
$("#find-movie").on("click", function(event) {

    event.preventDefault();
    var movie = $("#movie-input").val().trim();
    var queryURL= "https://www.omdbapi.com/?t=" + movie + "&apikey=bb6e985a";

// ajax call to omdbapi
$.ajax({ 
    url: queryURL,
    method: "GET"
   
}).then(function(response) {
//("#movie-view").text(JSON.stringify(response));
    console.log(response)

  var plot = $("src").text("Plot: " +response.Plot);
   var poster = $("<img>")
   poster.attr("src", response.Poster)
    
  poster.append(plot);  
    
    
   $("#movie-view").append(poster);
   var Plottwo = $("<h1>").text(response.Plot);




   $()



    
   
});
// we want to display the information in this function under the poster.
});
    //  function displayMovieInfo() {
    //     event.preventDefault();
       
    //     var movie = $(this).attr("data-name");
    //     var queryURL = "https://www.omdbapi.com/?t=" + movie + "apikey=bb6e985a";
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //       }).then(function(response) {
    //         var movieDiv = $("<div class=movie-view'>");
    
    //         var rating = response.Rated;
    //         var pOne = $("<p>").text("Rating: " + rating);
    //         movieDiv.append(pOne);

    //         var plot = response.Plot;
    //         var pThree = $("<p>").text("Plot: " + plot);
    //         movieDiv.append(pThree);
          
    //      $("#movies-view").prepend(movieDiv);
    //     }); 
    

    // }