import dataListArray from "../dataLists/dataListArray.js";

export default function openListItem() {
  const listTitle = document.createElement("h1");
  const listTitleS = document.createElement("span");
  const listTitleI = document.createElement("i");
  const listItems = document.createElement("div");
  const listItemsUnorderedList = document.createElement("ul");
  let item;

  const todo = localStorage.getItem("todos");
  console.log(todo);
  if (!todo) {
    item = dataListArray.find((dataItem) => {
      if (dataItem.title === "Inbox") {
        return dataItem;
      }
    });
  }
  //title
  listTitle.classList.add(item.title.toLowerCase());
  listTitleS.textContent = item.title;
  listTitleS.classList.add("list-span");
  item.fontAwesomeClass.forEach((element) => {
    listTitleI.classList.add(element);
  });
  listTitle.append(listTitleI, listTitleS);

  //list items
  item.listItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listItemsUnorderedList.appendChild(li);
  });
  listItems.appendChild(listItemsUnorderedList);

  return { listTitle, listItems };
}
