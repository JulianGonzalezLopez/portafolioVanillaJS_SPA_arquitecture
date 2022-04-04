import {ajax} from "./ajax.js";

export function validateForm(){

    const $form = document.querySelector(".contact-form");

    $form.addEventListener("submit",e=>{
        e.preventDefault();
        const contador = 0;
        const $submitBtn = e.target;
        const $inputs = $submitBtn.querySelectorAll(".required");
        const arrInputs = [...$inputs];
        arrInputs.forEach(input=>{
            console.log(input.value, input.pattern);
            if(!input.value.matches(input.pattern))return;
            let regex = new RegExp(input.pattern);
            if(!regex.exec(input.value)){
                input.classList.add("negativo");
                console.log("si");
                contador ++;
            }
            else{
                input.classList.add("positivo");
                console.log("no");
            }
        })
        if(contador === 0){
            console.log("ella quiere bailoteo");
            ajax({
                method: "POST",
                headers:  { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                cbSuccess: (json)=>{console.log(json)}
            
            });
        }
        else{
            console.log("ella no quiere bailoteo");
            return false;
        }
    })


}