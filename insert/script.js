import { insertNewItem } from "../utils/fetch.js";

const titleInput = document.getElementById("title");
const priceInput = document.getElementById("price");
const descriptionTextArea = document.getElementById("description");
const locationInput = document.getElementById("location");
const imageUrlInput = document.getElementById("img-url");

const sumbitBtn = document.getElementById("submit-btn");
const successWrapper = document.getElementById("succcess-message");
const errorWrapper = document.getElementById("error-message");

const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

sumbitBtn.addEventListener("click", async () => {
  if (
    titleInput.value.trim() === "" ||
    priceInput.value.trim() === "" ||
    descriptionTextArea.value.trim() === "" ||
    locationInput.value.trim() === "" ||
    imageUrlInput.value.trim() === ""
  ) {
    console.log("All fields must be filled in");
    errorWrapper.innerText = "All fields must be filled in";

    return;
  }

  if (
    titleInput.value.length < 3 ||
    descriptionTextArea.value.length < 3 ||
    locationInput.value.length < 3
  ) {
    console.log("Title, description or location must have at least 3 symbols");
    errorWrapper.innerText =
      "Title, description and location must have at least 3 symbols";

    return;
  }

  if (priceInput.value < 0) {
    console.log("Invalid price");
    errorWrapper.innerText = "Invalid price";
    return;
  }

  if (urlRegex.test(`${imageUrlInput.value}`) === false) {
    console.log("Invalid URL");
    errorWrapper.innerText = "Invalid image URL";

    return;
  }

  errorWrapper.textContent = "";

  const item = {
    title: titleInput.value.trim(),
    price: parseFloat(priceInput.value).toFixed(2),
    description: descriptionTextArea.value.trim(),
    location: locationInput.value.trim(),
    img_url: imageUrlInput.value.trim(),
  };

  console.log(item);

  const itemRes = await insertNewItem(item);

  if (itemRes) {
    successWrapper.innerText = "New item is inserted!";

    console.log(successWrapper.innerText);
  }
});
