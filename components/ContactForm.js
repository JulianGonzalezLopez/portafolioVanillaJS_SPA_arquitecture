import { validateForm } from "../helpers/validateForm.js";
import { Input } from "./Input.js";
import { Textarea } from "./Textarea.js";

export function ContactForm(){
    const $form = document.createElement("form");
    $form.classList.add("contact-form");
    $form.appendChild(Input({
        type:"text",
        name:"name",
        placeholder:"Write your name here",
        pattern:"[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
    }));
    $form.appendChild(Input({
        type:"email",
        name:"email",
        placeholder:"Write your email here",
        pattern:"^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
    }));
    $form.appendChild(Input({
        type:"text",
        name:"subject",
        placeholder:"Write the subject of your email here",
        pattern:"[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
    }));
    $form.appendChild(Textarea({
        name:"comments",
        placeholder:"Write the subject of your email here"
    }));
    
    $form.appendChild(Input({
        type:"submit",
        name:"submit",
        submit:"Submit"
    }));

    return $form;
}