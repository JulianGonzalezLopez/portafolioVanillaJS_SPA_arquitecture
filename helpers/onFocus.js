export function onFocus(){
    document.addEventListener("focusin",e=>{
        if(e.target.matches(".cute-div input") || e.target.matches(".cute-div textarea")){
            let el = e.target;
            el.classList.add("valid");
            console.log(el);
        }
    })
}