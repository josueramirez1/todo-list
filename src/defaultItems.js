export default function defaultItems() {
  //inbox
  const inbox = document.createElement("div");
  const inboxS = document.createElement("span");
  const inboxI = document.createElement("i");
  inboxS.textContent = "Inbox";
  inbox.classList.add("inbox");
  inboxI.classList.add("fa-solid", "fa-inbox");
  inbox.append(inboxI, inboxS);
  //today
  const today = document.createElement("div");
  const todayS = document.createElement("span");
  const todayI = document.createElement("i");
  todayS.textContent = "Today";
  today.classList.add("today");
  todayI.classList.add("fa-solid", "fa-sun");
  today.append(todayI, todayS);
  //upcoming
  const upcoming = document.createElement("div");
  const upcomingS = document.createElement("span");
  const upcomingI = document.createElement("i");
  upcomingS.textContent = "Upcoming";
  upcomingI.classList.add("fa-solid", "fa-calendar");
  upcoming.classList.add("upcoming");
  upcoming.append(upcomingI, upcomingS);
  //anytime
  const anytime = document.createElement("div");
  const anytimeS = document.createElement("span");
  const anytimeI = document.createElement("i");
  anytime.classList.add("anytime");
  anytimeS.textContent = "Anytime";
  anytimeI.classList.add("fa-solid", "fa-house");
  anytime.append(anytimeI, anytimeS);

  //someday
  const someday = document.createElement("div");
  const somedayS = document.createElement("span");
  const somedayI = document.createElement("i");
  somedayS.textContent = "Someday";
  someday.classList.add("someday");
  somedayI.classList.add("fa-solid", "fa-dog");
  someday.append(somedayI, somedayS);

  return { inbox, today, upcoming, anytime, someday };
}
