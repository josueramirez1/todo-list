import openListItems from "./defaultLists/openListItems.js";
import dataListArray from "./dataLists/dataListArray.js";

export default function clickList() {
  document.addEventListener("click", (e) => {
    //if user clicks on lists on left side...
    if (
      e.target.classList.contains("fa-solid") ||
      e.target.classList.contains("list-span")
    ) {
      let section = document.getElementById("section");

      //i want to save the name of the link i clicked
      const clickedName = e.target.parentNode.classList.value;
      const capitalized = clickedName
        ? clickedName.charAt(0).toUpperCase() + clickedName.slice(1)
        : "";
      const { sectionTitle, sectionItems } = openListItems(capitalized);
      section.replaceChildren(sectionTitle, sectionItems);
    }

    //if user clicks on list item  user gets to edit and updates array
    if (e.target.closest(".section-list-item")) {
      const parent = e.target.closest(".section-list-item");
      const child = parent.querySelector("label");
      let initialContent = "";
      child.contentEditable = "true";
      child.addEventListener(
        "focus",
        () => (initialContent = child.textContent),
      );
      child.addEventListener("blur", () => {
        if (child.textContent !== initialContent) {
          console.log("changed to", child.textContent);
          const title =
            document.querySelector(".section-list-span").textContent;
          const labels = [...document.querySelectorAll("label")];
          const updatedLabels = labels.map((label) => label.textContent);
          console.log(updatedLabels);
          localStorage.setItem(title, JSON.stringify(updatedLabels));
        }
      });
      child.focus();
    }

    //if all items have something written create a blank section item
  });
}
