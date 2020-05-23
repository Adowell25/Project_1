//pulling what was typed into input box into a var
            //---------CHANGE ID HERE----------------
//var movie = $("#movie-input").val().trim()
//----uncomment above and delete below once we have the html----------
var movie = "toy+story"
//queryURL to use in ajax call
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=wHW18mebdlqyjKaNmDXg2L6Oq2KJaUf3&q=" + movie + "&limit=10&lang=en";
//ajax call
$.ajax({
    url: queryURL,
    method: "GET",
    //after ajax call then...
}).then(function(response){
     //making it easier on myself with less typing
     var results = response.data;
     //for loop to display each of the responses
     for(var i = 0; i < results.length; i++){
        //picture div to append everything to, to put on page
        var pictureDiv = $("<div>");
        //image tag to put the moving and still pics in
        var gif = $("<img>");
        //making the first thing that shows up the still image 
        gif.attr("src", results[i].images.fixed_height_still.url);
        //giving data attributes amd a class to the image to call on later to pause and play the gifs
        gif.attr("data-animate", results[i].images.fixed_height.url);
        gif.attr("data-still", results[i].images.fixed_height_still.url);
        gif.addClass("gif");
        gif.attr("data-state", "still");
        //appending everything to the page
        pictureDiv.append(gif);
        //---------CHANGE ID HERE----------------
        $("#pics-display").append(pictureDiv);
     }
})
//pause and play on click function
$(document.body).on("click", ".gif", function() {
    //geting state data into a var to use
    var state = $(this).attr("data-state");
    //if its still change to animate and vice versa
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });