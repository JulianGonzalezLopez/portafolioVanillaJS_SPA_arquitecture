export function Input(props){
    let {type, name, placeholder, pattern, submit} = props;
    const $input = document.createElement("input");
    const $div = document.createElement("div");
    let $label;
    type ? $input.type = type : null;
    name ? $input.name = name : null;
    placeholder ? $input.placeholder = placeholder : null;
    pattern ? $input.pattern = pattern : null;
    if(submit){
        console.log(submit);
        $input.value = submit;
        $input.classList.add("btn-submit");
    }
    else{
        $label = document.createElement("label");
        $label.textContent = name;
        $div.appendChild($label);
        $input.style.width = "70%";
        $input.autocomplete = "off";
        $input.classList.add("requerido");
        $input.required = true;
    }
    $div.appendChild($input);
    $div.classList.add("cute-div");

    return $div;
}