/*
Simulatore di banca
Crea un oggetto conto con proprietà saldo, e metodi deposita(), preleva(), mostraSaldo().
*/
let saldo = parseInt(1000);
let continua = true;

function deposita(saldo){
    const deposito = prompt("quanto vuoi depositare? ")
    console.log("importo di "+deposito+" inserito!")
    return saldo + parseInt(deposito)
}

function preleva(saldo){
    let prelevato = false
    while(!prelevato){
        const prelevaVal = parseInt(prompt("quanto vuoi ritirare? "))
        if(prelevaVal < saldo){
            prelevato = true;
            console.log("ritiro di "+prelevaVal+" accettato!")
            return saldo - prelevaVal
        }
    }
    return saldo
}

function mostraSaldo(saldo){
    console.log("al momento hai "+saldo+"!")
}


while(continua){
    let scelta = parseInt(prompt("Quale operazione vuoi eseguire? 1-> deposita, 2 -> preleva, 3 -> mostra il saldo, 4 uscire"))
    switch(scelta){
        case 1:
            saldo = deposita(saldo)
            break;
        case 2:
            saldo = preleva(saldo)
            break;
        case 3:
            mostraSaldo(saldo)
            break;
        case 4:
            console.log("va bene, grazie per aver scelto la vostra banca!")
            continua = false;
            break;
    }
}