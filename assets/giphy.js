//on click to run ajax
$("#search").on("click", function () {
  $("#gif-pics").empty();
  //pulling what was typed into input box into a var
  //---------CHANGE ID HERE----------------
  var movie = $("#search-criteria").val().trim();

  //queryURL to use in ajax call
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?api_key=wHW18mebdlqyjKaNmDXg2L6Oq2KJaUf3&q=" +
    movie +
    "&limit=7&lang=en";
  console.log("clicked");
  console.log(movie);
  //ajax call
  $.ajax({
    url: queryURL,
    method: "GET",
    //after ajax call then...
  }).then(function (response) {
    console.log(response);
    //making it easier on myself with less typing
    var results = response.data;
    //making list
    var list = $("<ol>")
    //for loop to display each of the responses
    for (var i = 0; i < results.length; i++) {
      //picture div to append everything to, to put on page
      var pictureDiv = $("<li>");
      //image tag to put the moving and still pics in
      var gif = $("<img>");
      //making the first thing that shows up the still image
      gif.attr("src", results[i].images.fixed_height_small_still.url);
      //giving data attributes amd a class to the image to call on later to pause and play the gifs
      gif.attr("data-animate", results[i].images.fixed_height_small.url);
      gif.attr("data-still", results[i].images.fixed_height_small_still.url);
      gif.addClass("gif");
      gif.attr("data-state", "still");
      //appending everything to the page
      pictureDiv.append(gif);
      list.append(pictureDiv)

      //---------CHANGE ID HERE----------------
      $("#gif-pics").append(list);
    }
  });
});
//pause and play on click function
$(document.body).on("click", ".gif", function () {
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
