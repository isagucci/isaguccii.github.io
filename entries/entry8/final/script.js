$(document).ready(function () {
  $(".window").on("click", function (e) {
    // Adjust the condition to control the area where the overlay will appear
    if (e.clientY < $(this).height() * 0.3) {
      $(".handprint").fadeIn();
    }
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".window").length) {
      $(".handprint").fadeOut();
    }
  });
});

$(document).ready(function () {
  $(".window").on("click", function (e) {
    // Adjust the condition to control the area where the overlay will appear
    if (e.clientY < $(this).height() * 0.7) {
      $(".handprint3").fadeIn();
    }
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".window").length) {
      $(".handprint3").fadeOut();
    }
  });
});