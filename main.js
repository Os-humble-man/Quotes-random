//Tableau des citation il est preferable
// d'utiliser un api a la place


const key = 'UktKYumO0YYAw/8y/dTqfQ==eFo06AMRTUHua1MH';
const category = 'computers';

const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;


const headers = new Headers();

const request = new Request(url,{
    method:'GET',
    headers:{ 'X-Api-Key': key},
    mode:'cors',
    cache:'default',

});

fetch(request)
    .then((response)=>response.json())
    .then(data=>{
        console.log(data[0]);
        display_data(data)
    })





//selection des elements html
let btn = document.getElementById('btn');
let citation =  document.getElementById('citation');
let categorie = document.getElementsByClassName('categorie')
let auteur = document.getElementsByClassName('auteur');

function display_data(data){
    const quote = data[0].quote;
    const category = data[0].category;
    const author = data[0].author;

    //display data

    citation.innerHTML = quote;
    categorie.innerHTML = category;
    auteur.innerHTML = author;
}

// //chargement au click
// btn.addEventListener('click',()=>{
//     let aleatoire = Math.floor(Math.random()*(quotesBd.length));
//     afficher.innerHTML = quotesBd[aleatoire];
// })


// //chargement automatique apres 3s
// setInterval(()=>{
//     let aleatoire = Math.floor(Math.random()*(quotesBd.length));
//     afficher.innerHTML = quotesBd[aleatoire];
// }, 5000);