
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

  //var plot = $("src").text("Plot: " +response.Plot);
   var poster = $("<img>")
   poster.attr("src", response.Poster)
    
  
    
    
   $("#movie-view").append(poster);


    var moviePlot = response.Plot;

    var moviePloth1 = $("<h2>");
    moviePloth1.text(moviePlot);
    $("#movie-view").append(moviePloth1);


    var movieRating = response.Rated;

    var movieRatingPar= $("<h2>");
    movieRatingPar.text(movieRating);
    $("#movie-view").append(movieRatingPar);

    var movieRelease = response.Released;

    var movieReleaseh2 = $("<h2>");
    movieReleaseh2.text(movieRelease);
    $("#movie-view").append(movieReleaseh2);

// create the variable to hold the data from the response object
// create an element to set the text on, or other data
// append the elemtn to the movie view


   



    
   
});
// we want to display the information in this function under the poster.
});
    
      