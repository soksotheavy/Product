import { CardComponent } from "../components/CardComponent.js";
import {getData} from "../store/fatcApi.js"

let renderArea = document.querySelector("#renderArea");
// const BaseUrl = "http://127.0.0.1:5501/data/product.json";

// fetch(BaseUrl)
// .then((a) => a.json())
// .then((data) => {
//   let products = data.products;
//   products.map((product) => (renderArea.innerHTML += CardComponent(product)));
// });

let comments = await getData("comments")
console.log("comments", comments)

let albums = await getData("albums")
console.log("albums", albums)
 