function vigenereChiffrer(texte, cle) {
    texte = texte.toUpperCase();
    cle = cle.toUpperCase();

    let texteChiffre = "";

    for (let i = 0, j = 0; i < texte.length; i++) {
        const lettre = texte[i];

        if (lettre.match(/[A-Z]/)) {
            const decalageCle = cle.charCodeAt(j % cle.length) - "A".charCodeAt(0);
            const lettreChiffre = String.fromCharCode(((lettre.charCodeAt(0) - "A".charCodeAt(0) + decalageCle) % 26) + "A".charCodeAt(0));
            texteChiffre += lettreChiffre;
            j++;
        } else {
            texteChiffre += lettre;
        }
    }

    return texteChiffre;
}

function vigenereDechiffrer(texteChiffre, cle) {
    texteChiffre = texteChiffre.toUpperCase();
    cle = cle.toUpperCase();

    let texteDechiffre = "";

    for (let i = 0, j = 0; i < texteChiffre.length; i++) {
        const lettreChiffre = texteChiffre[i];

        if (lettreChiffre.match(/[A-Z]/)) {
            const decalageCle = cle.charCodeAt(j % cle.length) - "A".charCodeAt(0);
            const lettreDechiffre = String.fromCharCode(((lettreChiffre.charCodeAt(0) - "A".charCodeAt(0) - decalageCle + 26) % 26) + "A".charCodeAt(0));
            texteDechiffre += lettreDechiffre;
            j++;
        } else {
            texteDechiffre += lettreChiffre;
        }
    }

    return texteDechiffre;
}

// Exemple d'utilisation
const texteOriginal = "CHENA TAHA ELAMINE";
const cleVigenere = "KEY";

// Chiffrer le texte avec Vigenère
const texteChiffreVigenere = vigenereChiffrer(texteOriginal, cleVigenere);
console.log("Texte chiffré avec Vigenère:", texteChiffreVigenere);

// Déchiffrer le texte avec Vigenère
const texteDechiffreVigenere = vigenereDechiffrer(texteChiffreVigenere, cleVigenere);
console.log("Texte déchiffré avec Vigenère:", texteDechiffreVigenere);
