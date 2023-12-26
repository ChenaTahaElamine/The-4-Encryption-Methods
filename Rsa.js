// Fonction pour générer des nombres premiers aléatoires
function genererNombrePremier(min, max) {
    const nombreAleatoire = Math.floor(Math.random() * (max - min + 1)) + min;
    return estNombrePremier(nombreAleatoire) ? nombreAleatoire : genererNombrePremier(min, max);
}

// Fonction pour vérifier si un nombre est premier
function estNombrePremier(nombre) {
    if (nombre <= 1) return false;
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) return false;
    }
    return true;
}

// Fonction pour calculer le PGCD (Plus Grand Commun Diviseur) de deux nombres
function pgcd(a, b) {
    return b === 0 ? a : pgcd(b, a % b);
}

// Fonction pour générer les clés RSA (clé publique et clé privée)
function genererClesRSA() {
    // Choisissez deux nombres premiers aléatoires p et q
    const p = genererNombrePremier(50, 100);
    const q = genererNombrePremier(100, 150);

    // Calculez n (le produit de p et q)
    const n = p * q;

    // Calculez la fonction totient de n
    const totient = (p - 1) * (q - 1);

    // Choisissez un exposant de chiffrement e (doit être premier avec totient)
    let e = 2;
    while (e < totient) {
        if (pgcd(e, totient) === 1) break;
        e++;
    }

    // Calculez l'exposant de déchiffrement d (modulaire inverse de e modulo totient)
    let d = 1;
    while ((d * e) % totient !== 1) {
        d++;
    }

    // Retourne les clés publique (e, n) et privée (d, n)
    return {
        publicKey: { e, n },
        privateKey: { d, n }
    };
}

// Fonction pour chiffrer un message avec la clé publique
function chiffrerRSA(message, publicKey) {
    const { e, n } = publicKey;
    const messageChiffre = message.split('').map(char => {
        const charCode = char.charCodeAt(0);
        return (Math.pow(charCode, e) % n).toString();
    });
    return messageChiffre.join(' ');
}

// Fonction pour déchiffrer un message avec la clé privée
// Fonction pour déchiffrer un message avec la clé privée
function dechiffrerRSA(messageChiffre, privateKey) {
    const { d, n } = privateKey;
    const messageDechiffre = messageChiffre.split(' ').map(part => {
        const partInt = parseInt(part, 10);
        const charCode = modPow(partInt, d, n);
        return String.fromCharCode(charCode);
    });
    return messageDechiffre.join('');
}

// Fonction pour calculer la puissance modulaire (a^b mod n)
function modPow(a, b, n) {
    let result = 1;
    a = a % n;
    while (b > 0) {
        if (b % 2 === 1) {
            result = (result * a) % n;
        }
        b = Math.floor(b / 2);
        a = (a * a) % n;
    }
    return result;
}


// Exemple d'utilisation
const clesRSA = genererClesRSA();
const messageOriginal = "chena taha elamine";

// Chiffrer le message avec la clé publique
const messageChiffre = chiffrerRSA(messageOriginal, clesRSA.publicKey);
console.log("Message chiffré:", messageChiffre);

// Déchiffrer le message avec la clé privée
const messageDechiffre = dechiffrerRSA(messageChiffre, clesRSA.privateKey);
console.log("Message déchiffré:", messageDechiffre);
