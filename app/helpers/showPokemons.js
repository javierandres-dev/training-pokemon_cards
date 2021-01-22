"use strict";
import queryApi from "../helpers/rest-api.js";
import showPagination from "./showPagination.js";
import Cards from "../components/Cards.js";
// request and show pokemons
export default async function showPokemons(
  page = "https://pokeapi.co/api/v2/pokemon/"
) {
  const data = await queryApi(page);
  const { next, previous, results } = data;
  const $main = document.querySelector("main");
  $main.appendChild(Cards());
  const $cards = document.getElementById("pokemons");
  $cards.innerHTML = "";
  showPagination(next, previous);
  results.forEach((result) => {
    async function pokemon() {
      try {
        const pokemon = await queryApi(`${result.url}`);
        const {
          id,
          name,
          height,
          weight,
          abilities,
          base_experience,
          types,
        } = pokemon;
        const ability = abilities[0].ability.name;
        const type = types[0].type.name;
        $cards.innerHTML += `
<div class="pokemon">
  <figure>
    <img src="${pokemon.sprites.front_default}" alt="Front image ${name}">
    <figcaption>${name}</figcaption>
  </figure>
  <ul>
    <li><span>Ability </span> ${ability}</li>
    <li><span>Base experience </span> ${base_experience}</li>
    <li><span>Type </span> ${type}</li>
    <li><span>Height </span> ${height} dm.</li>
    <li><span>Weight </span> ${weight} hg.</li>
    <li class="id">#${id}</li>
  </ul>
</div>
      `;
      } catch (error) {
        console.warn(error);
      }
    }
    pokemon();
  });
}
