import createLocalStorage from "./createLocalStorage.js";
import createSectionItems from "./createSectionItems.js";
import createSectionTitle from "./createSectionTitle.js";
import dataListArray from "../dataLists/dataListArray.js";
import createSectionBlankItems from "./createSectionBlankItems.js";

export default function openListItems(clickedItem = "Inbox") {
  let item;
  //loop to find any values already in local storage
  let itemsInLocalStorage = [];
  for (let i = 0; i < dataListArray.length; i++) {
    let values = localStorage.getItem(dataListArray[i].title);
    if (!values) {
      continue;
    } else {
      itemsInLocalStorage.push(JSON.parse(values));
    }
  }
  //conditional statement
  //if no local storage, create it and load the default ui
  if (itemsInLocalStorage.length <= 0) {
    createLocalStorage();
    item = dataListArray.find((item) => item.title === clickedItem);
    console.log(item);
    createSectionBlankItems(item);
  }

  //if there is data in the itemInLocalStorage variable then update them in the dataListArray
  //also make the default ui appear for now
  if (itemsInLocalStorage.length > 0) {
    itemsInLocalStorage.forEach((arr, index) => {
      dataListArray[index].listItems = arr;
    });
    item = dataListArray.find((item) => item.title === clickedItem);
  }

  const sectionTitle = createSectionTitle(item);
  const sectionItems = createSectionItems(item);

  return { sectionTitle, sectionItems };
}
