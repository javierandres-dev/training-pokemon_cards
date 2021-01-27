"use strict";
import Top from "./components/Top.js";
import Title from "./components/Title.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Bottom from "./components/Bottom.js";
import Router from "./components/Router.js";
// call start components and router
export function App() {
  const $body = document.querySelector("body");
  $body.innerHTML = null;
  $body.appendChild(Top());
  $body.appendChild(Title());
  $body.appendChild(Nav());
  $body.appendChild(Main());
  $body.appendChild(Bottom());
  Router();
}
