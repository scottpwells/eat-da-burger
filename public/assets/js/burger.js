

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
    
