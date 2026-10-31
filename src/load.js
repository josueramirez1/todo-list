import createNames from "./defaultLists/createNames.js";
import createMain from "./sections/createMain.js";
import createAside from "./sections/createAside.js";
import createSection from "./sections/createSection.js";
import createNewList from "./sections/createNewList.js";
import createList from "./sections/createList.js";
import inboxPage from "./inboxPage.js";

export default function load() {
  //call functions
  const body = document.querySelector("body");
  const main = createMain();
  const aside = createAside();
  const section = createSection();
  const lists = createList();
  const newList = createNewList();
  const { inboxName, todayName, upcomingName, anytimeName, somedayName } =
    createNames();
  //append
  body.appendChild(main);
  main.append(aside, section);
  aside.append(lists, newList);
  lists.append(inboxName, todayName, upcomingName, anytimeName, somedayName);

  //append title to current list opened
  //this is temporary
  const title = inboxPage();
  section.append(title);
}
