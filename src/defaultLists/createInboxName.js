export default function createInboxName() {
  //inbox
  const inbox = document.createElement("div");
  const inboxS = document.createElement("span");
  const inboxI = document.createElement("i");
  inboxS.textContent = "Inbox";
  inbox.classList.add("inbox");
  inboxI.classList.add("fa-solid", "fa-inbox");
  inbox.append(inboxI, inboxS);
  return inbox;
}
