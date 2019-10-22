// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".create-form").on("click", function(event) {
    event.preventDefault();
    var newBurger = {
        burgerName: $("#newburger").val().trim()isDevoured; 0
    };
    // Send the PUT request.
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Added new burger");
        // Reload the page to get the updated list
        location.reload();
      });
  });

  $(".eatburger").on("click", function(event){
    event.preventDefault();
    var id = $(this).data("id");
    var devouredState = {
        isDevoured: true
    };
  
  // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: devouredState
  }).then(
    function() {
      console.log("burger devoured");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".trashburger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");

    //send the DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id
    }).then(location.reload());
  })

});
