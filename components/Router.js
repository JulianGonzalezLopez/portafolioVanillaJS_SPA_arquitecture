import {ajax} from "../helpers/ajax.js";
import { GithubTemplate } from "./GithubTemplate.js";
import { Loader } from "./Loader.js";
import { TextP } from "./TextP.js";
import { Title } from "./Title.js";
import { TitleSection } from "./TitleSection.js";
import { NormalSection } from "./NormalSection.js";
import { LenCard } from "./LenCard.js";
import { ImgDiv } from "./ImgDiv.js";
import { LenCardsDiv } from "./LenCardsDiv.js";
import { toTop } from "../helpers/toTop.js";
import { ContactForm } from "./ContactForm.js";
import { addRequired } from "../helpers/addRequired.js";
import { validateForm } from "../helpers/validateForm.js";
import data from "../assets/db.json" assert {type: "json"};


export async function Router(){

    
    let { hash } = location;
    const $main = document.querySelector("#main");
    $main.innerHTML = null;
    toTop();
    //$main.appendChild($loader);

    //ABOUT ME
    if(!hash || hash === "#/"){
        $main.appendChild(TitleSection({
            title:Title({
                text:"Introduction",
                element:"h1",
                className:"titleh1"
            }),
            el:TextP({
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
            el:ImgDiv({
                text:TextP({
                    text: "As you can imagine, I'm a self-taught front-end developer. However, I'm a student at the Universidad Tecnologica Nacional where I study programming formally. Right now, I'm learning about the usage of APIs and the SPA arquitecture, that's the reason why this page has both of them instead of plain HTML",
                    className:"xxx"
                }),
                link:"App/assets/mate_gaucho.jpg"})
        })); 

        let arr;
/*         await ajax({
            url:"http://localhost:3000/conocimientos",
            cbSuccess:json=>arr = json
        }) */


        $main.appendChild(TitleSection({
            title:Title({
                text:"My relationship with programming",
                element:"h2",
                className:"titleh2"
            }),
            el:LenCardsDiv([data.conocimientos])
        })); 
        $main.appendChild(TitleSection({
            title:Title({
                text:"My hobbies",
                element:"h2",
                className:"titleh2"
            }),
            el:ImgDiv({
                text:TextP({
                    text: "Whenever I'm bored I do one out of two things. I play indie videogames such as Hollow Knight, Slay the spire, etc or I learn about useless information that I'm sure one day will prove useful",
                    className:"xxx"
                }),
                link:"App/assets/videogames.jpg"})
        })); 
    }
    else if(hash === "#/repo"){
        $main.appendChild(TitleSection({
            title:Title({
                text:"Projects",
                element:"h1",
                className:"titleh1"
            }),
            el:TextP({
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
            }
        })
    }
    else if(hash === "#/contact"){
        $main.appendChild(TitleSection({
            title:Title({
                text:"Contact me",
                element:"h1",
                className:"titleh1"
            }),
            el:ContactForm()
        }))

        validateForm();
        addRequired();
    }
}

//Title({
/*     text:"Projects",
    element:"h1",
    className:"titleh1"
}) */