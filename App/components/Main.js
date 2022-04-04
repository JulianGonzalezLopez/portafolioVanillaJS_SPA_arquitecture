import { SideBar } from "./SideBar.js";

export function Main(){
    const $main = document.createElement("main");
    $main.id = "main";
    $main.classList.add("main-flex");
    $main.appendChild(SideBar());
    return $main;
}
