export default class Person {
  constructor() {
    console.log("hello from person");
  }
}

export function addTextToBody(text) {
  const div = document.createElement("div");
  div.textContent = text;
  document.body.appendChild(div);
}
