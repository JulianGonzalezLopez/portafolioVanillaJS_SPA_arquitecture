import {ajax} from "../helpers/ajax.js";

export function Router(){

    
    let { hash } = location;
    const $main = document.querySelector("#main");

    $main.innerHTML = null;

    //HOME
    if(!hash || hash === "#/"){

    }
    //ABOUT ME
    else if(hash == "#/about"){

    }
    else if(hash === "#/repo"){
        ajax({
            url:"https://api.github.com/users/JulianGonzalezLopez/repos",
            cbSuccess: data=>{console.log(data)}
        })
    }

}