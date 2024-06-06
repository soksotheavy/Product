const BaseUrl = "https://jsonplaceholder.typicode.com/";
export async function getData(endpoint){
    // fetch(`${BaseUrl}${endpoint}`)
    // .then((res) => res.json())
    // .then((data) => data);
    try{
        const data = await fetch(`${BaseUrl}${endpoint}`)
        const res = await data.json();
        return res;
    }catch(error){
        console.log("error", error);
    }
}