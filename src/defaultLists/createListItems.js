export default function createListItems(item) {
  const listItems = document.createElement("div");

  //list items
  listItems.classList.add("list-items");
  item.listItems.forEach((item, index) => {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item");
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.type = "checkbox";
    input.id = `item-number-${index}`;
    input.name = "item";
    input.value = "item";

    label.setAttribute("for", `item-number-${index}`);
    label.textContent = item;
    listItem.append(input, label);
    listItems.appendChild(listItem);
  });

  return listItems;
}
