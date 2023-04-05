//Définition d'une constante MAX_LIFE avec une valeur de 100
const MAX_LIFE = 100;

//Définition de la classe Fighter
class Fighter {
  //Constructor qui prend en paramètres un nom, une force et une dextérité
  constructor(name, strength, dexterity) {
    //Initialisation des propriétés
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.weapon = null;
    this.shield = null;
  }

  //Méthode "fight" qui prend en paramètre un défenseur
  fight(defender) {
    //Calcule le nombre de points d'attaque
    const attackPoints = this.getRandomInt(this.getDamage());
    //Calcule le nombre de points de défense
    const defensePoints = defender.getRandomInt(defender.getDefense());

    //Calcule les dégâts infligés en soustrayant les points de défense aux points d'attaque
    const damages = Math.max(attackPoints - defensePoints, 0);

    //Retire les dégâts infligés à la vie du défenseur
    defender.life = Math.max(defender.life - damages, 0);
  }

  //Méthode qui retourne un entier aléatoire compris entre 1 et max (inclus)
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  //Méthode qui retourne vrai si le combattant est en vie (vie > 0)
  isAlive() {
    return this.life > 0;
  }

  //Méthode qui calcule les dégâts infligés par le combattant (force + bonus de l'arme)
  getDamage() {
    let damage = this.strength;
    if (this.weapon !== null) {
      damage += this.weapon.damage;
    }
    return damage;
  }

  //Méthode qui calcule la défense du combattant (dextérité + bonus du bouclier)
  getDefense() {
    let defense = this.dexterity;
    if (this.shield !== null) {
      defense += this.shield.protection;
    }
    return defense;
  }
}

//Exportation de la classe Fighter pour pouvoir l'utiliser dans d'autres fichiers
module.exports = Fighter;
