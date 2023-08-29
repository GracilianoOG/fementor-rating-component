const submitPage = document.querySelector(".component__rating");
const resultPage = document.querySelector(".component__final");
const btnSubmit = document.querySelector(".component__submit");

btnSubmit.addEventListener("click", () => {
  submitPage.style.display = "none";
  resultPage.style.display = "block";
}, { once: true });