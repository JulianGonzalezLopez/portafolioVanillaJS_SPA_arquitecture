export function Pic(props){
    let {src, alt} = props;
    const $img = document.createElement("img");
    $img.src = src;
    $img.alt = alt;
    $img.classList.add("pic");
    return $img;
}