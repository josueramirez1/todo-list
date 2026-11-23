import dataListArray from "../dataLists/dataListArray.js";

function getDataList() {
  let itemToBeChecked;

  console.log(dataListArray);

  //if there is nothing in local storage, ADD IT
  for (let i = 0; i < dataListArray.length; i++) {
    let itemName = dataListArray[i].title;
    itemToBeChecked = localStorage.getItem(itemName);
    if (!itemToBeChecked) {
      localStorage.setItem(dataListArray[i].title, dataListArray[i].listItems);
    }
  }

  console.log(true);

  for (let i = 0; i < dataListArray.length; i++) {
    let itemName = dataListArray[i].title;
    itemToBeChecked = localStorage.getItem(itemName);
    if (itemToBeChecked) {
      console.log("yes");
    }
  }

  return dataListArray;
}

export default getDataList;
