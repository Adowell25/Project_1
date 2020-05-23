
$("#find-movie").on("click", function(event) {

    event.preventDefault();
    var movie = $("#movie-input").val().trim();
    var queryURL= "https://www.omdbapi.com/?t=" + movie + "&apikey=bb6e985a";

// ajax call to omdbapi
$.ajax({ 
    url: queryURL,
    method: "GET"
   
}).then(function(response) {
    //$("#movie-view").text(JSON.stringify(response));
    console.log(response)

    var plot = $("<p>").text("Plot: " +response.Plot);
    var poster = $("<img>")
    poster.attr("src", response.Poster)
    
    poster.append(plot);  
    
    
    $("#movie-view").append(poster);

    
   
});
});