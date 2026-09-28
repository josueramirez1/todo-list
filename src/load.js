export default function load() {
  //select body
  const body = document.querySelector("body");
  //create html tags
  const main = document.createElement("main");
  const aside = document.createElement("aside");
  const section = document.createElement("section");
  //create id's or class
  main.id = "main";
  aside.id = "aside";
  section.id = "section";
  //append
  body.appendChild(main);
  main.append(aside, section);
}
