export function SideBtn(props){
    let {text, href} = props;
    const $li = document.createElement("li");
    const $anchor = document.createElement("a");
    $anchor.textContent = text;
    $anchor.href = href;
    $anchor.classList.add("side-link");
    $li.appendChild($anchor);
    $li.classList.add("sideBtn");
    $li.addEventListener("click",()=>{
        document.querySelector(".navSmall").classList.toggle("show");
        document.querySelector(".navSmall").classList.toggle("hide");
    })

    return $li;
}