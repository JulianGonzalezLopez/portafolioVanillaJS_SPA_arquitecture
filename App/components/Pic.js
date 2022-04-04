export function Pic(text){
    const $text = document.createElement("h3");
    $text.textContent = text;
    $text.classList.add("header-text");
    return $text;
}