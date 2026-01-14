import { fetchItemById, deleteItemById } from "../utils/fetch.js";

const itemWrapper = document.getElementById("item-wrapper");
const deleteBtn = document.getElementById("delete-btn");

const successWrapper = document.getElementById("succcess-message");

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const item = await fetchItemById(id);

console.log(item);

const imgWrapper = document.createElement("div");
imgWrapper.classList.add("img-wrapper");

const image = document.createElement("img");
image.src = item.img_url;

const card = document.createElement("div");
card.classList.add("card");

const cardHeadingWrapper = document.createElement("div");
cardHeadingWrapper.classList.add("card-heading-wrapper");

const title = document.createElement("h2");
title.innerText = item.title;
title.classList.add("card-heading-title");

const price = document.createElement("h3");
price.classList.add("price");
const priceValue = parseFloat(item.price);
price.innerText = `${priceValue.toFixed(2)} €`;

const location = document.createElement("p");
location.innerText = `Location: ${item.location}`;

const cardDescriptionWrapper = document.createElement("div");
cardDescriptionWrapper.classList.add("card-description-wrapper");

const descriptionHeading = document.createElement("h3");
descriptionHeading.innerText = "Description:";

const description = document.createElement("p");
description.innerText = item.description;

imgWrapper.append(image);
cardHeadingWrapper.append(title, price, location);
cardDescriptionWrapper.append(descriptionHeading, description);
card.append(cardHeadingWrapper, cardDescriptionWrapper);
itemWrapper.append(imgWrapper, card);

deleteBtn.addEventListener("click", async () => {
  const item = await deleteItemById(id);

  if (item) {
    successWrapper.innerText = "The item is deteled";

    console.log(item);
    console.log(successWrapper.innerText);
  }
});
