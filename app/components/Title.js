"use strict";
// set up the title view
export default function Title() {
  const $title = document.createElement("h3");
  $title.classList.add("title");
  $title.innerHTML = "pokémon cards";
  return $title;
}
