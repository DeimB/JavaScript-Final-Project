import { fetchAllItems } from "./utils/fetch.js";

const itemsWrapper = document.getElementById("items-wrapper");

const items = await fetchAllItems();

// items.sort((a, b) => a.price - b.price);

[...items]
  .sort((a, b) => a.price - b.price)
  .forEach((i) => {
    const card = document.createElement("a");
    card.classList.add("card");
    const link = `./item/index.html?id=${i.id}`;
    card.href = link;

    const image = document.createElement("img");
    image.src = i.img_url;

    const cardHeadingWrapper = document.createElement("div");
    cardHeadingWrapper.classList.add("card-heading-wrapper");

    const title = document.createElement("h3");
    title.innerText = i.title;

    const price = document.createElement("h4");
    price.classList.add("price");
    const priceValue = parseFloat(i.price);
    price.innerText = `${priceValue.toFixed(2)} €`;

    cardHeadingWrapper.append(title, price);
    card.append(image, cardHeadingWrapper);
    itemsWrapper.append(card);
  });

console.log(items);
