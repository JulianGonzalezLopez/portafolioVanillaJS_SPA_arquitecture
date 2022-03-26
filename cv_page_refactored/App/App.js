import { Footer } from "./components/Footer.js";
import { Header } from "./components/header.js";
import { Main } from "./components/Main.js";
import { NavBar } from "./components/NavBar.js";
import { Router } from "./components/Router.js";
import { SideBar } from "./components/SideBar.js";

export function App(){
    const $root = document.querySelector("#root");
    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Footer());
    $root.appendChild(SideBar());
    Router();
}