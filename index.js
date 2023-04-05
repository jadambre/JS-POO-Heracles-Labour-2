//Importation des classes Fighter, Weapon et Shield depuis leurs fichiers respectifs
const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/Weapon.js");
const Shield = require("./src/Shield.js");

//Création d'une instance de Fighter nommée "heracles" avec un nom, 20 points de vie et 6 points de force
const heracles = new Fighter("🧔 Heracles", 20, 6);

//Création d'une instance de Fighter nommée "boar" avec un nom, 25 points de vie et 12 points de force
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

//Création d'une instance de Weapon nommée "sword" avec un nom et une force de 10
const sword = new Weapon("Épée", 10);

//Ajout de l'arme à "heracles"
heracles.weapon = sword;

//Création d'une instance de Shield avec une force de 10
const shield = new Shield(10);

//Ajout du bouclier à "heracles"
heracles.shield = shield;

//Définition d'une fonction qui retourne le texte affichant le statut des deux combattants à chaque round
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};

//Définition d'une fonction qui retourne un objet contenant les informations sur le vainqueur et le perdant
const score = (fighter1, fighter2) => {
  return fighter1.isAlive()
    ? {
        winner: fighter1,
        loser: fighter2,
      }
    : {
        winner: fighter2,
        loser: fighter1,
      };
};

//Boucle tant que les deux combattants sont en vie
while (heracles.isAlive() && boar.isAlive()) {
  //Le premier combattant attaque le deuxième
  heracles.fight(boar);

  //Affiche le résultat du round
  console.log(roundDisplay(heracles, boar));
}

//Calcule le score final et on affiche le nom du vainqueur
const result = score(heracles, boar);
console.log(`${result.winner.name} wins!`);
