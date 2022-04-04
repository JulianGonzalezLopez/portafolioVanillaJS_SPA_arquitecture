export function NormalSection(props){
    let {text, elements} = props;
    const $normalSection = document.createElement("section");
    $normalSection.classList.add("normalSection");
    $normalSection.appendChild(text)
    if(elements){
        elements.forEach(e=>{
            $normalSection.appendChild(e);
        })
    }
    return $normalSection;
}