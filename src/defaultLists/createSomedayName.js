export default function createSomedayName() {
  const someday = document.createElement("div");
  const somedayS = document.createElement("span");
  const somedayI = document.createElement("i");
  somedayS.textContent = "Someday";
  someday.classList.add("someday");
  somedayI.classList.add("fa-solid", "fa-dog");
  someday.append(somedayI, somedayS);
  return someday;
}
