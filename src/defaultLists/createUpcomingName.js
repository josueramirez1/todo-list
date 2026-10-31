export default function createUpcomingName() {
  const upcoming = document.createElement("div");
  const upcomingS = document.createElement("span");
  const upcomingI = document.createElement("i");
  upcomingS.textContent = "Upcoming";
  upcomingI.classList.add("fa-solid", "fa-calendar");
  upcoming.classList.add("upcoming");
  upcoming.append(upcomingI, upcomingS);
  return upcoming;
}
