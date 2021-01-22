"use strict";
export default function Cards() {
  const $cards = document.createElement("div");
  $cards.classList.add("pokemons");
  $cards.setAttribute("id", "pokemons");
  return $cards;
}
