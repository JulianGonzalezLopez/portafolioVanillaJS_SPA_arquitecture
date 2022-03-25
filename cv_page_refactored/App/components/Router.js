import {ajax} from "../helpers/ajax.js";
import { GithubTemplate } from "./GithubTemplate.js";
import { Loader } from "./Loader.js";
import { TextP } from "./TextP.js";
import { Title } from "./Title.js";
import { TitleSection } from "./TitleSection.js";
import { NormalSection } from "./NormalSection.js";
import { LenCard } from "./LenCard.js";

export function Router(){

    
    let { hash } = location;
    const $main = document.querySelector("#main");
    const $loader = Loader();
    $main.innerHTML = null;
    //$main.appendChild($loader);

    //ABOUT ME
    if(!hash || hash === "#/"){
        $main.appendChild(TitleSection({
            title:Title({
                text:"Introduction",
                element:"h1",
                className:"titleh1"
            }),
            text:TextP({
                text:"Hello! I'm Julian, an argentinian front-end programmer who want to work as such",
                className:"titlep"
            })


        }));
        $main.appendChild(TitleSection({
            title:Title({
                text:"How do I learn?",
                element:"h2",
                className:"titleh2"
            }),
            text:TextP({
                text:"As you can imagine, I'm a self-taught front-end developer, however, I'm a student at Universidad Tecnologica Nacional where I study programming formally",
                className:"bodyp"
            }),
            givenClass:"img-div-holder",
            bg: "App/assets/mate_gaucho.jpg"
        }));
    }
    else if(hash === "#/repo"){
        $main.appendChild(TitleSection({
            title:Title({
                text:"Projects",
                element:"h1",
                className:"titleh1"
            }),
            text:TextP({
                text:"Here you can see some of my projects with its link to my Github repo",
                className:"titlep"
            })
        }));
        ajax({
            url:"https://api.github.com/users/JulianGonzalezLopez/starred",
            cbSuccess: json=>{
                console.log(json);
                json.forEach(el=>{
                    $main.appendChild(GithubTemplate(el));
                })
                console.log($loader);
                $loader.style.display = "none";
            }
        })
    }
}

//Title({
/*     text:"Projects",
    element:"h1",
    className:"titleh1"
}) */