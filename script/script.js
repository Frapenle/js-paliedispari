/*  ======= Palidroma =====
Chiedere all’utente di inserire una parola:
Creare una funzione per capire se la parola inserita è palindroma
*/

function isPalindroma(word) {
    // Misuro la lunghezza della parola inserita
    const lunghezza = word.length;

    // Divido la parola a metà
    let check = true;
    for (let i = 0; i < lunghezza / 2; i++) {
        //variabile di appoggio true
        // controlla se il primo e ultimo carattere son diversi
        if (word[i] !== word[lunghezza - 1 - i]) {
            //se il primo e ultimo carattere son diversi return false
            check = false;
        }
    }
    // se son uguali return true
    return check;
}

const userWord = prompt(`Inserisci una parola`)

const result = isPalindroma(userWord);

console.log(result);