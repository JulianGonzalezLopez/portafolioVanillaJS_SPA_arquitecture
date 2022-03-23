import { NavBtn } from "./NavBtn.js";
import { SideBtn } from "./SideBtn.js";

export  function SideBar(){
    const $side = document.createElement("div");
    $side.classList.add("navSmall");
    $side.classList.add("hide");
    const $navBar = document.createElement("nav");
    $navBar.classList.add("sideNav");
    $navBar.appendChild(SideBtn({
        text:"Home",
        href: "#/home"
    }))
    $navBar.appendChild(SideBtn({
        text:"About me",
        href: "#/about"
    }))
    $navBar.appendChild(NavBtn({
        text:"My repo",
        href: "#/repo"
    }))
    $navBar.appendChild(SideBtn({
        text:"Contact me",
        href: "#/contact"
    }))
    $side.appendChild($navBar);
    return $side;
}