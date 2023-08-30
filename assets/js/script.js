$(document).ready(function() {
  $(".component__submit").click(function() {
    const rating = $(".rating__btn--selected").text();
    $(".component__text span").text(rating);
    $(".component__rating").css("display", "none");
    $(".component__final").fadeIn(600).css("display", "block");
  });

  $(".rating").on("click", ".rating__btn", function() {
    $(".rating__btn").removeClass("rating__btn--selected");
    $(this).addClass("rating__btn--selected");
  });
});