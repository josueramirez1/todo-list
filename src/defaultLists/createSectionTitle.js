export default function createListTitle(item) {
  const listTitle = document.createElement("h1");
  const listTitleS = document.createElement("span");
  const listTitleI = document.createElement("i");

  //title
  listTitle.classList.add(item.title.toLowerCase());
  listTitleS.textContent = item.title;
  listTitleS.classList.add("section-list-span");
  item.fontAwesomeClass.forEach((element) => {
    listTitleI.classList.add(element);
  });
  listTitle.append(listTitleI, listTitleS);
  return listTitle;
}
