import { TextP } from "./TextP.js";

export function LenCard(props){
    let {text, className} = props;
    const $section = document.createElement("section");
//     $section.appendChild(//img// )
    $section.appendChild(TextP({text, className}))
    $section.classList.add("len-card");  

    return $section;
}