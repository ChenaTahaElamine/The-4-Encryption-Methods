const alphabet = "abcdefghijklmnopqrstuvwxyz";

function estEnMajuscules(texte) {
    for (var i = 0; i < texte.length; i++) {
        // Vérifier si le caractère actuel n'est pas une lettre majuscule
        if (texte.charAt(i) !== texte.charAt(i).toUpperCase()) {
            return false;
        }
    }
    // Tous les caractères sont des lettres majuscules
    return true;
}

function chiffrer(texte, decalage) {
    if (estEnMajuscules(texte)) {

        texte = texte.toLowerCase();

        let texteChiffre = "";
        for (let i = 0; i < texte.length; i++) {
            const lettre = texte[i];
            const index = alphabet.indexOf(lettre);
            if (index === -1) {
                texteChiffre += lettre;
                continue;
            }
            texteChiffre += alphabet[(index + decalage) % alphabet.length];
        }
        return texteChiffre;

    } else if (estEnMajuscules(texte) === false) {
        let texteChiffre = "";
        for (let i = 0; i < texte.length; i++) {
            const lettre = texte[i];
            const index = alphabet.indexOf(lettre);
            if (index === -1) {
                texteChiffre += lettre;
                continue;
            }
            texteChiffre += alphabet[(index + decalage) % alphabet.length];
        }
        return texteChiffre;
    }
}

function dechiffrer(texte, decalage) {
    let texteDechiffre = "";
    for (let i = 0; i < texte.length; i++) {
        const lettre = texte[i];
        const index = alphabet.indexOf(lettre);
        if (index === -1) {
            texteDechiffre += lettre;
            continue;
        }
        texteDechiffre += alphabet[(index - decalage) % alphabet.length];
    }
    return texteDechiffre;
}

// Exemple d'utilisation
const texte = "chena";
const decalage = 3;

const texteChiffre = chiffrer(texte, decalage);
console.log(texteChiffre);

const texteDechiffre = dechiffrer(texteChiffre, decalage);
console.log(texteDechiffre); 
