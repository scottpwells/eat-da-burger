// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $( document).ready(function() {
//   console.log( "ready!" );
// });
//   $(".change-devour").on("click", function(event) {
//     event.preventDefault();
//     const clientValue = $(this).children(".input-sector").val().trim();
    
//    // var id = $(this).data("id");
//   //  var newDevour = $(this).data("newdevour");
// console.log(clientValue)

//     // Send the PUT request.
//     $.ajax("/burgers/" + id, {
//       type: "PUT",
//      url: "/burger/" + clientValue
//     }).then(
//       function() {
//         console.log("changed burger to", newDevour);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

  // $(".create-form").on("submit", function(event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();

  //   var newBurger = {
  //     name: $("#bu").val().trim(),
  //     sleepy: $("[name=devour]:checked").val().trim()
  //   };

  //   // Send the POST request.
  //   $.ajax("/burgers/", {
  //     type: "POST",
  //     data: newBurger
  //   }).then(
  //     function() {
  //       console.log("created new burger");
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

  $(document).ready(function() {
    $(".change-devour").on("submit", function(event) {
      event.preventDefault();
      var burger_id = $(this)(".burger_name").val();
      console.log(burger_id);
      $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
    });

    $(".change-devour").click(function(){
      console.log("workng)")
    })
  });
    
