export default function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.innerHTML = `
<span>Built by <a class="nav-link" href="https://www.javierandresgp.com" target="_blank" rel="noopener noreferrer">Javier Andrés GP</a>.</span>&nbsp;&nbsp;<span>Found a bug or have an idea? Contact me</span>
  `;
  return $header;
}
