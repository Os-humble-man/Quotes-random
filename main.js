const key = "UktKYumO0YYAw/8y/dTqfQ==eFo06AMRTUHua1MH";
const category = "computers";

const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

const headers = new Headers();

const request = new Request(url, {
  method: "GET",
  headers: { "X-Api-Key": key },
  mode: "cors",
  cache: "default",
});

let container = document.querySelector(".container");
let quote = document.getElementById("quote");
let cat = document.getElementById("cat");
let aut = document.getElementById("aut");
function display_data(data) {
  const quotation = data[0].quote;
  const category = data[0].category;
  const author = data[0].author;

  //   //display data

  quote.innerHTML = quotation;
  cat.innerHTML = "Categorie : " + category;
  aut.innerHTML = " Auteur : " + author;
}

// //chargement automatique apres 10s
setInterval(() => {
  fetch(request)
    .then((response) => response.json())
    .then((data) => {
      display_data(data);
    });
}, 10000);

setInterval(() => {
  fetch("https://source.unsplash.com/1600x900/?computer").then((res) => {
    container.style.background = "url(" + res.url;
  });
}, 12000);
