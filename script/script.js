/*  ======= Palidroma =====
Chiedere all’utente di inserire una parola:
Creare una funzione per capire se la parola inserita è palindroma
*/

function palindroma() {
    // Misuro la lunghezza della parola inserita
    const lunghezza = word.length;

    // Divido la parola a metà
    for (let i = 0; i < lunghezza / 2; i++) {
        // controlla se il primo e ultimo carattere son diversi
        if (word[i] !== word[lunghezza - 1 - i]) {
            return `Questa parola non è palindroma`
        }
    }
    // se son uguali return
    return `Questa parola è palindroma`
}

const word = prompt(`Inserisci una parola`)

const result = palindroma(word);

console.log(result);