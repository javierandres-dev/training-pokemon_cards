"use strict";
// set up the pokémon cards view
export default function Cards() {
  const $cards = document.createElement("div");
  $cards.classList.add("pokemons");
  $cards.setAttribute("id", "pokemons");
  return $cards;
}
