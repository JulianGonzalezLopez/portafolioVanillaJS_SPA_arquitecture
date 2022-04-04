export function ImgDiv(props){
    let {text,link} = props;
    const $imgDiv = document.createElement("div");
    $imgDiv.style.backgroundImage = `url(${link})`
    $imgDiv.classList.add("img-div");
    $imgDiv.appendChild(text);

    return $imgDiv;
}