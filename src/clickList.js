import openListItems from "./defaultLists/openListItems.js";
import createSection from "./sections/createSection.js";

export default function clickList() {
  document.addEventListener("click", (e) => {
    const faSolid = e.target.classList.contains("fa-solid");
    const listSpan = e.target.classList.contains("list-span");
    // const sectionItems = e.target.classList.contains("list-item");
    //if user clicks on lists on left side...
    if (faSolid || listSpan) {
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
    // if (e.target.closest(".list-item")) {
    //   console.log("true");
    //   e.target.addEventListener("change", (e) => {
    //     console.log(e.target);
    //   });
    // }
  });
}
