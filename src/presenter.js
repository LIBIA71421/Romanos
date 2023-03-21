import romano from "./romanos.js";
import romanos from "./romanos.js";

const first = document.querySelector("#numeroN");
const form = document.querySelector("#romanos-form");
const div = document.querySelector("#res-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + romano(first.value) + "</p>";
});
