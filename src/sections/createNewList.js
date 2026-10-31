export default function createNewList() {
  const newListDiv = document.createElement("div");
  const newListBtnS = document.createElement("span");
  const newListBtnI = document.createElement("i");
  newListBtnS.textContent = "New List";
  newListBtnI.classList.add("fa-solid", "fa-plus");
  newListDiv.id = "new-list";
  newListDiv.append(newListBtnI, newListBtnS);
  return newListDiv;
}
