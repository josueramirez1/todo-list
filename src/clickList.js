export default function clickList() {
  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("fa-solid") ||
      e.target.classList.contains("list-span")
    ) {
      //i want to save the name of the link i clicked
      const clickedName = e.target.parentNode.classList.value;
      console.log(clickedName);
    }
  });
}
