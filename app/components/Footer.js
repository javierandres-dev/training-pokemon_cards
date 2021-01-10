export default function Footer() {
  const $footer = document.createElement("footer");
  $footer.classList.add("footer");
  $footer.innerHTML = `
<nav>
  <span>&copy;</span>&nbsp;&nbsp;
  <a href="https://pokeapi.co/"
      target="_blank"
      rel="noopener noreferrer">API</a>&nbsp;&nbsp;
  <a href="https://github.com/javierandresgp/"
      target="_blank"
      rel="noopener noreferrer">Developer</a>
</nav>
<small>I created this SPA using vanilla JavaScript, for the styles I used vanilla CSS. It is created base on the data available in the REST API PokéApi.</small>
  `;
  return $footer;
}
