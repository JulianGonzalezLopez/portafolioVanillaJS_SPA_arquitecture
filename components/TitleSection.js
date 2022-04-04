export function TitleSection(props){
    let {title, el, givenClass}  = props;
    const $titleSection = document.createElement("section");
    $titleSection.classList.add("title-section");
    $titleSection.appendChild(title)
    $titleSection.appendChild(el);

    return $titleSection;
}