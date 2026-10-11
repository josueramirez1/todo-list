export default function defaultItems() {
  //inbox
  const inbox = document.createElement("div");
  inbox.textContent = "Inbox";
  inbox.classList.add("inbox");
  const today = document.createElement("div");
  today.textContent = "Today";
  today.classList.add("today");
  const upcoming = document.createElement("div");
  upcoming.textContent = "Upcoming";
  upcoming.classList.add("upcoming");
  const anytime = document.createElement("div");
  anytime.textContent = "Anytime";
  const someday = document.createElement("div");
  someday.textContent = "Someday";

  return { inbox, today, upcoming, anytime, someday };
}
