import getDataList from "./getDataList.js";
import createListItems from "./createListItems.js";
import createListTitle from "./createListTitle.js";

export default function openListItem() {
  let item;
  const items = getDataList();

  item = items.find((dataItem) => {
    if (dataItem.title === "Inbox") {
      return dataItem;
    }
  });

  const listTitle = createListTitle(item);
  const listItems = createListItems(item);

  return { listTitle, listItems };
}
