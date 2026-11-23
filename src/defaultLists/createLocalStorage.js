import dataListArray from "../dataLists/dataListArray.js";

function createLocalStorage() {
  let itemToBeChecked = "";
  console.log(dataListArray);

  //if there is nothing in local storage, ADD TO LOCAL storage
  for (let i = 0; i < dataListArray.length; i++) {
    let itemName = dataListArray[i].title;
    itemToBeChecked = localStorage.getItem(itemName);
    if (!itemToBeChecked) {
      localStorage.setItem(
        dataListArray[i].title,
        JSON.stringify(dataListArray[i].listItems),
      );
    }
  }

  return dataListArray;
}

export default createLocalStorage;
