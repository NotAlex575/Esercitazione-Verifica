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