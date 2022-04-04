export function addRequired(){
    document.addEventListener("focusin",e=>{
        let el = e.target;  
        if(!el.matches(".required"))return;

        el.classList.add("valid");
        console.log(el);
    })
}