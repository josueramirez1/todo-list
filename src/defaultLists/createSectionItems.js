import createSectionBlankItems from "./createSectionBlankItems.js";

export default function createSectionItems(item) {
  let listDiv = document.createElement("div");
  listDiv.classList.add("section-list-items");
  //list items

  if (item.listItems.length > 0) {
    item.listItems.forEach((text) => {
      const listItem = document.createElement("div");
      listItem.classList.add("section-list-item");
      const input = document.createElement("input");
      const label = document.createElement("label");

      input.type = "checkbox";
      input.name = "item";
      input.value = "item";

      label.contentEditable = "false";
      label.textContent = "" || text;
      listItem.append(input, label);
      listDiv.appendChild(listItem);
    });
  } else {
    const blankItems = createSectionBlankItems(item);
    listDiv.appendChild(blankItems);
  }

  return listDiv;
}
