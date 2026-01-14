export const fetchAllItems = async () => {
  const response = await fetch(
    "https://695e10332556fd22f6772f85.mockapi.io/items"
  );

  const items = await response.json();

  return items;
};

export const insertNewItem = async (item) => {
  const response = await fetch(
    `https://695e10332556fd22f6772f85.mockapi.io/items`,
    {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    }
  );
  const itemRes = await response.json();

  return itemRes;
};

export const fetchItemById = async (id) => {
  const response = await fetch(
    `https://695e10332556fd22f6772f85.mockapi.io/items/${id}`
  );

  const item = await response.json();
  return item;
};

export const deleteItemById = async (id) => {
  const response = await fetch(
    `https://695e10332556fd22f6772f85.mockapi.io/items/${id}`,
    {
      method: "DELETE",
    }
  );

  const item = await response.json();
  return item;
};
