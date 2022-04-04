export function Title(props){
    let {element, text, className} = props;

    const $title = document.createElement(element);
    $title.textContent = text;
    $title.classList.add(className);

    return $title;
}