/*
OBJECTIVE - when we click on the button we have to show the corresponding background image
- step 1 - find a way to get the HTML element of the buttons
- step 2 - find a way to identify the user's click on the button
- step 3 - uncheck the previously selected button
- step 4 - mark the clicked button as if it were selected
- step 5 - hide the previously selected image
- step 6 - make the image corresponding to the clicked button appear
- step 7 - hide the information of the previously selected dragon
- step 8 - show the dragon information regarding the clicked button
*/

//- step 1 - find a way to get the HTML element of the buttons
const carouselButtons = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");
const informations = document.querySelectorAll(".information");

// - step 2 - find a way to identify the user's click on the button
carouselButtons.forEach((button, ind) => {
  button.addEventListener("click", () => {
    // - step 3 - uncheck the previously selected button
    disableSelectedButton();

    // - step 4 - mark the clicked button as if it were selected
    markSelectedButton(button);

    // - step 5 - hide the previously selected image
    hideActiveImage();

    // - step 6 - make the image corresponding to the clicked button appear
    showBackgroundImage(ind);

    // - step 7 - hide the information of the previously selected dragon
    hideActiveInformation();

    // - step 8 - show the dragon information regarding the clicked button
    showInformation(ind);
  });
});

function markSelectedButton(button) {
  button.classList.add("selected");
}

function showInformation(ind) {
  informations[ind].classList.add("active");
}

function hideActiveInformation() {
  const informationActice = document.querySelector(".information.active");
  informationActice.classList.remove("active");
}

function showBackgroundImage(ind) {
  images[ind].classList.add("active");
}

function hideActiveImage() {
  const activeImage = document.querySelector(".active");
  activeImage.classList.remove("active");
}

function disableSelectedButton() {
  const selectedButton = document.querySelector(".selected");
  selectedButton.classList.remove("selected");
}
