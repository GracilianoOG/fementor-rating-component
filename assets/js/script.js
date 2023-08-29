$(document).ready(function() {
  $(".component__submit").click(function() {
    $(".component__rating").css("display", "none");
    $(".component__final").css("display", "block");
  });
});