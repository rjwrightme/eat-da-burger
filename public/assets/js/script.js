// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    console.log($(this).data);
    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {devoured: true}
    }).then(
      function() {
        console.log("Devoured it!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".burger-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerField").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log(`Created a ${newBurger.burger_name}. Hope you're hungry!`);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
