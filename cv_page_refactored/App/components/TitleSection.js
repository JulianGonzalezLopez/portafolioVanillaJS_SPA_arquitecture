export function TitleSection(props){
    let {title, text, bg, givenClass}  = props;
    const $titleSection = document.createElement("section");
    $titleSection.classList.add(givenClass||"titleSection");
    $titleSection.appendChild(title)

    if(bg != null){
        const $div = document.createElement("div");
        $div.appendChild(text);
        $div.classList.add("secBg");
        $titleSection.appendChild($div);
        $div.style.backgroundImage = `url(${bg})`;
    }
    else{
        text ? $titleSection.appendChild(text) : null;
    }

    return $titleSection;
}