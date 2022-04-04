import { LenCard } from "./LenCard.js";

export function LenCardsDiv(arr){
    const $div = document.createElement("div");
    $div.classList.add("cards-div");
    console.log(arr);
    arr[0].forEach(card=>$div.appendChild(LenCard(card)));

    return $div;
}