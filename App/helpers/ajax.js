export async function ajax(props){

    let {url, cbSuccess, method, headers} = props;
    try{
        let res;
        if(!method){res = await fetch(url)}
        else{
            let form = document.querySelector(".contact-form");
            res = await fetch("https://formsubmit.co/ajax/ab72b771ef040cfbf0ea972f4c6b23ee",{
            method,
            headers,
            body: JSON.stringify({
                name: form.querySelector("input[name=name]").value,
                email:form.querySelector("input[name=email]").value,
                subject:form.querySelector("input[name=subject]").value,
                message:form.querySelector("textarea[name=comments]").value
            })
        });}

        let json = await res.json();

        console.log(json);
        cbSuccess(json);
    }
    catch(err){
        console.log(err);
    }
}