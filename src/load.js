import defaultItems from "./defaultItems.js";
import inboxPage from "./inbox.js";

export default function load() {
  //select body
  const body = document.querySelector("body");
  //create html tags
  const main = document.createElement("main");
  const aside = document.createElement("aside");
  const lists = document.createElement("div");
  const newListDiv = document.createElement("div");
  const section = document.createElement("section");
  //create id's or class
  main.id = "main";
  aside.id = "aside";
  section.id = "section";
  lists.id = "lists";
  newListDiv.id = "new-list";
  //append
  body.appendChild(main);
  main.append(aside, section);
  //append divs  to aside
  const { inbox, today, upcoming, anytime, someday, newListBtnI, newListBtnS } =
    defaultItems();
  lists.append(inbox, today, upcoming, anytime, someday);
  newListDiv.append(newListBtnI, newListBtnS);
  aside.append(lists, newListDiv);

  //append title to current list opened
  const title = inboxPage();
  section.append(title);
}
