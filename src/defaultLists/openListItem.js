import dataListArray from "../dataLists/dataListArray.js";
import createListItems from "./createListItems.js";
import createListTitle from "./createListTitle.js";

export default function openListItem() {
  let item;
  const todo = localStorage.getItem("todos");

  console.log(todo);
  //initial default
  if (!todo) {
    item = dataListArray.find((dataItem) => {
      if (dataItem.title === "Inbox") {
        return dataItem;
      }
    });
  }

  const listTitle = createListTitle(item);
  const listItems = createListItems(item);

  console.log(item);
  localStorage.setItem(item.title, item.listItems);
  return { listTitle, listItems };
}
