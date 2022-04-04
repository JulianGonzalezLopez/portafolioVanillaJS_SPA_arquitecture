export function NavBtn(props){
    let {text, href} = props;
    const $li = document.createElement("li");
    const $anchor = document.createElement("a");
    $anchor.textContent = text;
    $anchor.href = href;
    $anchor.classList.add("header-link");
    $li.appendChild($anchor);
    $li.classList.add("navBtn");
    
    return $li;
}