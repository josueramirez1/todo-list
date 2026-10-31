export default function createAnytimeName() {
  const anytime = document.createElement("div");
  const anytimeS = document.createElement("span");
  const anytimeI = document.createElement("i");
  anytime.classList.add("anytime");
  anytimeS.textContent = "Anytime";
  anytimeI.classList.add("fa-solid", "fa-house");
  anytime.append(anytimeI, anytimeS);
  return anytime;
}
