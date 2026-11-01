export default function createTodayName() {
  const today = document.createElement("div");
  const todayS = document.createElement("span");
  const todayI = document.createElement("i");
  todayS.textContent = "Today";
  todayS.classList.add("list-span");
  today.classList.add("today");
  todayI.classList.add("fa-solid", "fa-sun");
  today.append(todayI, todayS);
  return today;
}
