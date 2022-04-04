export function Textarea(props){
    let {name, placeholder} = props;
    const $textarea = document.createElement("textarea");
    const $label = document.createElement("label");
    const $div = document.createElement("div");
    $textarea.name = name;
    $textarea.placeholder = placeholder;
    $textarea.style.width = "70%";
    $textarea.rows = 10;
    $textarea.style.resize = "none";
    $textarea.required = true;
    $label.textContent = name;
    $div.appendChild($label);
    $div.appendChild($textarea);
    $div.classList.add("cute-div");

    return $div;
}