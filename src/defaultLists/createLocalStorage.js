import dataListArray from "../dataLists/dataListArray.js";

function createLocalStorage() {
  //data list is imported
  //loop begins.
  for (let i = 0; i < dataListArray.length; i++) {
    //since each name has an individual array a loop is created to get each one and check if it exists
    //if it does not exist one is created and an empty array is made for it
    localStorage.setItem(
      dataListArray[i].title,
      JSON.stringify(dataListArray[i].listItems),
    );
    console.log(dataListArray[i].listItems);
  }
}

export default createLocalStorage;
