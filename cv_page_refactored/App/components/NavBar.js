import { Hamburger } from "./HamburgerBtn.js";
import { NavBtn } from "./NavBtn.js";

export function NavBar(){
    const $navBar = document.createElement("nav");
    $navBar.appendChild(NavBtn({
        text:"About me",
        href: "#/"
    }))
    $navBar.appendChild(NavBtn({
        text:"Projects",
        href: "#/repo"
    }))
    $navBar.appendChild(NavBtn({
        text:"Contact me",
        href: "#/contact"
    }))
    $navBar.appendChild(Hamburger());
    return $navBar;

}