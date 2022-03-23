export function ajax(props){

    let {url, cbSuccess} = props;

    fetch(url)
    
    .then(res=>res.ok ? res.json() : Promise.reject())

    .then(json=>cbSuccess(json))

    .catch(err=>{
        let message = {status: err.status, statusText: err.statusText};
        console.log(err.status || "Error en el fetch");
    }
    )
}