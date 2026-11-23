import createLocalStorage from "./createLocalStorage.js";
import createListItems from "./createListItems.js";
import createListTitle from "./createListTitle.js";

export default function openListItems() {
  let item;
  const items = createLocalStorage();

  item = items.find((dataItem) => {
    if (dataItem.title === "Inbox") {
      return dataItem;
    }
  });

  const listTitle = createListTitle(item);
  const listItems = createListItems(item);

  return { listTitle, listItems };
}
