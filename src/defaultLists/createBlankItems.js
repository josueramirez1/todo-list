export default function createBlankItems(index) {
  const blankItem = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");

  blankItem.classList.add("list-item");

  input.type = "checkbox";
  input.id = `item-number-${index}`;
  input.name = "item";
  input.value = "item";

  label.setAttribute("for", `item-number-${index}`);
  label.textContent = "";

  blankItem.append(input, label);

  return blankItem;
}
