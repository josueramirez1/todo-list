// import createNames from "./defaultLists/createNames.js";
import createMain from "./sections/createMain.js";
import createAside from "./sections/createAside.js";
import createSection from "./sections/createSection.js";
import createNewList from "./sections/createNewList.js";
import createList from "./sections/createList.js";
import openListItems from "./defaultLists/openListItems.js";
import dataListArray from "./dataLists/dataListArray.js";

export default function load() {
  //call functions
  const body = document.querySelector("body");
  const main = createMain();
  const aside = createAside();
  const section = createSection();
  const lists = createList();
  const newList = createNewList();

  //append
  body.appendChild(main);
  main.append(aside, section);
  aside.append(lists, newList);
  dataListArray.forEach((name) => {
    const listNameDiv = document.createElement("div");
    const listNameSpan = document.createElement("span");
    const listNameIcon = document.createElement("i");
    listNameSpan.textContent = name.title;
    listNameSpan.classList.add("list-span");
    listNameDiv.classList.add("inbox");
    name.fontAwesomeClass.forEach((icon) => listNameIcon.classList.add(icon));
    listNameDiv.append(listNameIcon, listNameSpan);
    lists.append(listNameDiv);
  });

  const { listTitle, listItems } = openListItems();
  section.append(listTitle, listItems);
}
