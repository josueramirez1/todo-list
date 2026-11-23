function getDataList() {
  const todo = localStorage.getItem("todos");

  if (!todo) {
    return [
      {
        title: "Inbox",
        fontAwesomeClass: ["fa-solid", "fa-inbox"],
        listItems: [],
      },
      {
        title: "Today",
        fontAwesomeClass: [, "fa-solid", "fa-sun"],
        listItems: [],
      },
      {
        title: "Upcoming",
        fontAwesomeClass: ["fa-solid", "fa-calendar"],
        listItems: [],
      },
      {
        title: "Anytime",
        fontAwesomeClass: ["fa-solid", "fa-house"],
        listItems: [],
      },
      {
        title: "Someday",
        fontAwesomeClass: ["fa-solid", "fa-dog"],
        listItems: [],
      },
    ];
  }
}

export default dataListArray;
