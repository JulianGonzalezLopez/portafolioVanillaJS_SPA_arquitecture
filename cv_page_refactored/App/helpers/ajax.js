export async function ajax(props){

    let {url, cbSuccess} = props;

    try{
        let res = await fetch(url);
        let json = await res.json();

        console.log(json);
        cbSuccess(json);
    }
    catch(err){
        console.log(err);
    }
}