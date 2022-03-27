import { NavBar } from "./NavBar.js";
import { Pic } from "./Pic.js";


export function Header(){
    const $header = document.createElement("header");
    $header.appendChild(Pic("Jgl"));
    $header.appendChild(NavBar());
    
    return $header;
}