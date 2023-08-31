$(document).ready(function() {
  const btnSubmit = $(".component__submit");
  const ratingWrapper = $(".rating");
  const ratingBtns = $(".rating__btn");

  btnSubmit.attr("disabled", true);
  btnSubmit.click(function() {
    const rating = $(".rating__btn--selected").text();
    $(".component__text span").text(rating);
    $(".component__rating").css("display", "none");
    $(".component__final").fadeIn(600).css("display", "block");
  });

  ratingWrapper.on("click", ".rating__btn", function() {
    if(!ratingWrapper.data("clicked")) {
      ratingWrapper.data("clicked", true);
      btnSubmit.removeClass("component__submit--disabled");
      btnSubmit.attr("disabled", false);
    }
    ratingBtns.removeClass("rating__btn--selected");
    $(this).addClass("rating__btn--selected");
  });
});