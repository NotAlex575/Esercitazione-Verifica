Esercizio: Snack Function

Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]")

Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito

Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera

Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno

BONUS: 
Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)

___________________________________________________________________________________________________________________________________________________

Esercizio: Snack Array e Oggetti

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.




Esercizio: forEach, map, filter, find

1)	Dato il seguente array:

const names = ['Edoardo', 'Simone', 'Francesco'];

Stampa in console tutti i nomi
Risultato: 'Edoardo', 'Simone', 'Francesco'





2)	 Dato il seguente oggetto:


const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

Stampa in console tutti i nomi
Risultato: 'Paolo', 'Giulia', 'Marco'





3)	Dato il seguente array:
const numbers = [2, 8, 4, 7, 2, 87];

Crea un nuovo array in cui tutti i numeri siano incrementati di 1
Risultato: [3, 9, 5, 8, 3, 88]



4) Dato il seguente oggetto:

const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

Crea un nuovo array coi nomi di tutti gli autori
Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']


5)	Dato il seguente array:

const nums = [2, 8, 4, 7, 12, 87];

Crea un array a partire dall'array nums, che abbia solo i numeri pari
Risultato: [2, 8, 4, 12]

6)	Dato il seguente oggetto:

const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti








7)	Dato il seguente oggetto:

const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

Recupera i dati dello studente con id 2
Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }







8)	Dato il seguente oggetto:

const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];


Recupera la classe dello studente 'Marco Lanci'
Risultato: '3C'




___________________________________________________________________________________

SOLUZIONI ESERCIZI:

Esercizio: Snack Function



Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]")

const nome = "Paolino";

function ciao(nome){
    return `Ciao ${nome}`;
}

console.log(ciao(nome));

___________________________________________________________________________________


Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito

//Scrivi una funzione che accetti un array di nomi 
//e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito

const Nomi = ["Alessandro", "Mauro", "Ilija" ,"Omar"];

const PrimaLettera = (Nomi) => {
    let primaLettera = [];
    for(i = 0; i < Nomi.length; i++){
        primaLettera.push(Nomi[i][0]);
    }
    return primaLettera;
}

console.log(PrimaLettera(Nomi));


____________________________________________________________________________________


Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera

const Stringhe = ["Alessandro", "Mauro", "Ilija" ,"Omar", "Alfonso"];
const lettera = "A"

const PrimaLettera = (Stringhe, lettera) => {
    let primaLettera = [];
    for(i = 0; i < Stringhe.length; i++){
        if(Stringhe[i][0] === lettera){
            primaLettera.push(Stringhe[i]);
        }
    }
    return primaLettera;
}

console.log(PrimaLettera(Stringhe, lettera));

_____________________________________________________________________________________


//Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno

const stringa = "pincopallino"

const Vocali = (stringa) =>{
    const vocali = ["a", "e", "i", "o", "u"]; 
    let totVocali = 0;
    for(i = 0; i < stringa.length; i++){
        if(vocali.includes(stringa[i])){
            totVocali++; 
        }
    }
    return totVocali;
}

console.log(Vocali(stringa))


______________________________________________________________________________________

/*
Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nome = "Paolino";
const orario = 13;

function ciao(nome, orario){
    if(orario <= 13){
        return `Buongiorno ${nome}`;
    }
    else if (orario <= 17){
        return `Buonpomeriggio ${nome}`;
    }
    else if(orario > 17){
        return `Buonasera ${nome}`;
    }
}

console.log(ciao(nome, orario));

_______________________________________________________________________________________


Esercizio: Snack Array e Oggetti

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const biciclette = [
  { nome: "Bianchi Sprint", peso: 7.8 },
  { nome: "Trek Domane", peso: 8.2 },
  { nome: "Specialized Allez", peso: 8.5 },
  { nome: "Cannondale Synapse", peso: 8.0 }
];

let pesoMinore = 100000000000000000;
let nomeBici = "";

biciclette.forEach((bici) => {
    if(bici.peso < pesoMinore){
        nomeBici = bici.nome
        pesoMinore = bici.peso
    }
})

console.log("Nome bici: ",nomeBici,"Peso Bici: ",pesoMinore)


_________________________________________________________________________________________________________________________________________

/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadre = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 }
];

squadre.forEach(squadra => {
    squadra.puntiFatti = Math.floor(Math.random()*100)
    squadra.falliSubiti = Math.floor(Math.random()*50)
})

console.log(squadre);

const nomeSquadre = [];
squadre.forEach(squadra => {
    nomeSquadre.push({
        nome: squadra.nome,
        falli: squadra.falliSubiti
    })
})

console.log(nomeSquadre);


_______________________________________________________________________________________________________________________________________

Soluzioni forEach, filter, map, find



/*
Dato il seguente array:

const names = ['Edoardo', 'Simone', 'Francesco'];

Stampa in console tutti i nomi
Risultato: 'Edoardo', 'Simone', 'Francesco'
*/

//forEach

const names = ['Edoardo', 'Simone', 'Francesco'];

names.forEach((name) => {
    console.log(name)
})

_________________________________________________

/*
Dato il seguente array:

const names = ['Edoardo', 'Simone', 'Francesco'];

Stampa in console tutti i nomi
Risultato: 'Edoardo', 'Simone', 'Francesco'
*/

//map

const names = ['Edoardo', 'Simone', 'Francesco'];

names.map((name) => {
    console.log(name)
})

___________________________________________________________________________________________________________________________________________


Dato il seguente oggetto:

const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

Stampa in console tutti i nomi
Risultato: 'Paolo', 'Giulia', 'Marco'


//forEach /map

const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

people.forEach((person) => {
    console.log(person.name)
})

___________________________________________________________________________________________________________________________________________


Dato il seguente array:
const numbers = [2, 8, 4, 7, 2, 87];

Crea un nuovo array in cui tutti i numeri siano incrementati di 1
Risultato: [3, 9, 5, 8, 3, 88]

//forEach / map

const numbers = [2, 8, 4, 7, 2, 87];

numbers.forEach((number) => {
    number++;
    console.log(number)
})

____________________________________________________________________________________________________________________________________________

Dato il seguente oggetto:

const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

Crea un nuovo array coi nomi di tutti gli autori
Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']


const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

let nomiPosts = [];

posts.map((post) => {
    nomiPosts.push(post.author)
})
console.log(nomiPosts)

____________________________________________________________________________________________________________________________________________


Dato il seguente array:

const nums = [2, 8, 4, 7, 12, 87];

Crea un array a partire dall'array nums, che abbia solo i numeri pari
Risultato: [2, 8, 4, 12]

//filter

const nums = [2, 8, 4, 7, 12, 87];

const pari = nums.filter((num) => num %2 === 0)

console.log(pari)


____________________________________________________________________________________________________________________________________________


/*
Dato il seguente oggetto:

const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

Recupera i dati dello studente con id 2
Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }
*/

//filter

const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

const filterStudent = students.find(student => student.id == 2)
console.log(filterStudent)

______________________________________________________________________________________________________________________________________


