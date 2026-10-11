export default function defaultItems() {
  //inbox
  const inbox = document.createElement("div");
  inbox.textContent = "Inbox";
  inbox.classList.add("inbox");
  const today = document.createElement("div");
  const todayI = document.createElement("i");
  today.textContent = "Today";
  today.classList.add("today");
  todayI.classList.add("fa-solid");
  todayI.classList.add("fa-inbox");
  //upcoming
  const upcoming = document.createElement("div");
  const upcomingi = document.createElement("i");
  upcoming.textContent = "Upcoming";
  upcomingi.classList.add("fa-solid");
  upcomingi.classList.add("fa-calendar");
  upcoming.classList.add("upcoming");
  //anytime
  const anytime = document.createElement("div");
  anytime.textContent = "Anytime";
  const someday = document.createElement("div");
  someday.textContent = "Someday";

  return { inbox, today, upcoming, anytime, someday };
}
