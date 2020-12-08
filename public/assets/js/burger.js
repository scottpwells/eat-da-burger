$(function() {

    console.log("hello world");
  // Add a new burger.
  $(".create-form").on("submit", function(event) {
      event.preventDefault();

      var newBurger = {
          burger_name: $("#newburger").val().trim(),
          devoured:$("[name=devour]:checked").val().trim(),
      };

      // Send the POST request.
      $.ajax("/burger/", {
          type:"POST",
          data: newBurger
      }) .then(function(res) {
          console.log("Added new burger");
          // Reload the page to get the updated burger list.
          location.reload();
      });
  });
  
  $(".change-devour").on("click", function(event) {
      event.preventDefault();

      var id = $(this).val();
      console.log(id)
   ;

      // Send the PUT request.
      $.ajax("/burger/" + id, {
          method: "PUT",
      }).then(function(data) {
          console.log("Burger devour" + data);
          location.reload();
      });
  });
});
