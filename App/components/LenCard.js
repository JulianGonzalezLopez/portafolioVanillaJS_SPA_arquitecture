
export function LenCard(props){
    let {name, img, caption} = props;
    console.log(name,img,caption)
    const $figure = document.createElement("figure");
//     $section.appendChild(//img// )
    $figure.classList.add("len-card");  
    $figure.innerHTML += `<img src="${img}" alt="${name}">`;
    $figure.innerHTML += `<figcaption>${caption}</figcaption>`;

    return $figure;
}