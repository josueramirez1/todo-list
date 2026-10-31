import createAnytimeName from "./createAnytimeName.js";
import createInboxName from "./createInboxName.js";
import createNewListName from "../sections/createNewList.js";
import createSomedayName from "./createSomedayName.js";
import createTodayName from "./createTodayName.js";
import createUpcomingName from "./createUpcomingName.js";

export default function createNames() {
  //inbox
  const inboxName = createInboxName();
  //today
  const todayName = createTodayName();
  //upcoming
  const upcomingName = createUpcomingName();
  //anytime
  const anytimeName = createAnytimeName();
  //someday
  const somedayName = createSomedayName();
  //new list
  const newListDiv = createNewListName();
  return {
    inboxName,
    todayName,
    upcomingName,
    anytimeName,
    somedayName,
    newListDiv,
  };
}
