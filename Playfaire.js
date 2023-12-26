const obj = require('./PlayfaireMethods/index');

// Votre code ici...


// Exemple d'utilisation
var keyword = "TAHA";
var phraseACoder = "AMINE";

// Crypter
var cryptogramme = obj.index.crypterPlayfair(phraseACoder, keyword);
console.log("Cryptogramme:", cryptogramme);

// Décrypter
var messageDecode = obj.index.decrypterPlayfair(cryptogramme, keyword);
console.log("Message décodé:", messageDecode);
