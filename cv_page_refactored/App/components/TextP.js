export function TextP(props){
    let {text, className} = props;
    const $textP = document.createElement("p");
    $textP.textContent = text;
    $textP.classList.add(className);

    return $textP;
}