export default function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.innerHTML = `
<span>Built by Javier Andrés.</span>&nbsp;&nbsp;<span>Found a bug or have an idea?
<a class="nav-link" href="https://www.javierandresgp.com" target="_blank" rel="noopener noreferrer">Contact me</a>.</span>
  `;
  return $header;
}
