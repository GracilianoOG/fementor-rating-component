$(document).ready(function() {
  $(".component__submit").click(function() {
    $(".component__rating").css("display", "none");
    $(".component__final").fadeIn(600).css("display", "block");
  });

  $(".rating__btn").click(function() {
    $(".rating__btn").removeClass("rating__btn--selected");
    $(this).addClass("rating__btn--selected");
  });
});