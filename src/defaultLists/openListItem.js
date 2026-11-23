import getDataList from "../dataLists/dataListArray.js";
import createListItems from "./createListItems.js";
import createListTitle from "./createListTitle.js";

export default function openListItem() {
  let item;

  //initial default

  item = getDataList();
  item.find((dataItem) => {
    if (dataItem.title === "Inbox") {
      return dataItem;
    }
  });

  const listTitle = createListTitle(item);
  const listItems = createListItems(item);

  console.log(item);
  localStorage.setItem(item.title, item.listItems);
  return { listTitle, listItems };
}
