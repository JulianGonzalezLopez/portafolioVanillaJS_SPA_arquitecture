export function Hamburger(){
    const $hamburger = document.createElement("i");
    $hamburger.classList.add("fa-bars");
    $hamburger.classList.add("fa-solid");
    $hamburger.classList.add("hamburger");

    $hamburger.addEventListener("click",()=>{
        document.querySelector(".navSmall").classList.toggle("show");
        document.querySelector(".navSmall").classList.toggle("hide");
    })

    return $hamburger;
}