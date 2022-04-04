export function Footer(){
    const $footer = document.createElement("footer");
    $footer.classList.add("footer-flex");
    const $foot = document.createElement("small");
    $foot.textContent = "This page was made by Gonzalez Lopez Julian";
    const $social = document.createElement("div");
    $social.innerHTML +=`
    <a href="https://github.com/JulianGonzalezLopez" target="_blank"><i class="fa-brands fa-github socialIcon"></i></a>
    <a href="https://www.linkedin.com/in/julian-gonzalez-832044234/" target="_blank"><i class="fa-brands fa-linkedin socialIcon"></i></a>` ;

    $footer.appendChild($foot);
    $footer.appendChild($social);

    return $footer;
}