export function widthChoices(){
    const wWidth = window.innerWidth;

    if(wWidth <= 800){
        return false;
    }
    else{
        return true;
    }
}