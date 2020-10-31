
var descriptionButton = document.querySelector(".btn");
var descriptionInput = document.querySelector(".description");



descriptionButton.addEventListener("click", function (event) {
    event.preventDefault();

    var textInput = descriptionInput.value;
    localStorage.setItem("hour-9", JSON.stringify(textInput));
});






