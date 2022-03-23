import { NavBar } from "./NavBar.js";
import { Pic } from "./Pic.js";


export function Header(){
    const $header = document.createElement("header");
    $header.appendChild(Pic({
        src:"App/assets/pic.jpeg",
        alt:"Profile pic"
    }));
    $header.appendChild(NavBar());

    return $header;
}