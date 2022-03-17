const inputText = document.querySelector("#input");
const textLength = document.querySelector("#textLength");

inputText.addEventListener("input", function () {
  textLength.innerHTML = inputText.value.length;
});
