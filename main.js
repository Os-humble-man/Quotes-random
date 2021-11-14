//Tableau des citation il est preferable
// d'utiliser un api a la place

let quotesBd=[
    "Tous les hommes naissent égaux mais les meilleurs deviennent développeurs -<br>oscar k",
    "je n'ai pas de père, je n'ai pas de mère Je n'ai pas de religion.Je suis une idée,le Congo m'a façonné et je chercherai à mon tout à e façonner. -<br>Patrice Emery Lumumba",
    "La question n'est pas de savoir si la vie a un sens mais comment pourrais-je donner un sens à ma propre vie. -<br>Dalai Lama",
    "Et puis, il y a ceux que l'on croise, que l'on connait à peine, qui vous disent un mot, une phrase, vous accordent une minute, une demi-heure et changent le cours de votre vie. -<br>Victor Hugo",
    "La tolérance est une porte à ne pas laisser ouverte trop lontemps. A force de l'ouvrir à n'importe qui, elle finit par être defoncée. -<br>William Sinclair M.",
    "L'amitié et l'amour fleurissent là où les gens sont honnêtes. -<br>Ornella Minerva",
    "Un bon programmeur est quelqu'un qui regarde toujours des deux côtés avant de traverser une rue à sens unique. Doug Linder",
    "Former les esprits sans les conformer,les enrichir sans les endoctriner,les armer sans les enrôler,leur donner le meilleur de soi sans attendre ce salaire qu'est la ressemblance -<br>Edmond Rostand",
    "L'intelligence n'est pas une affaire de diplômes. L'intelligence est la force, solitaire, d'extraire du chaos de sa propre vie la poignée de lumière suffisante pour éclairer un peu plus loi que soi -<br>Christian Bobin",
    "L'égoïsme, ce n'est pas vivre comme on veut, mais exiger que les autres vivent comme on le voudrait nous. -<br>Oscar Wilde",
    "J'ai toujours pensé que le pire truc qui pourrait nous arriver dans la vie c'est finir sa vie tout seul... mais c'est faux. Le pire truc qui pourrait nous arriver c'est de finir notre vie entouré de personnes qui nous font se sentir seul. -<br>Robin Williams",
    "S'aimer soi-même est le dêbut d'une histoire d'amour qui dure tout la vie -<br>Oscar Wilde",
    "On ne peut pas résoudre un problème avec le même niveau de pense que celle qui l'a cree -<br>Albert Einstein"
]






//selection des elements html
let btn = document.getElementById('btn');
let afficher = document.getElementById('afficher')

//chargement au click
btn.addEventListener('click',()=>{
    let aleatoire = Math.floor(Math.random()*(quotesBd.length));
    afficher.innerHTML = quotesBd[aleatoire];
})


//chargement automatique apres 3s
setInterval(()=>{
    let aleatoire = Math.floor(Math.random()*(quotesBd.length));
    afficher.innerHTML = quotesBd[aleatoire];
}, 5000);