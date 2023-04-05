//Définition de la classe Weapon
class Weapon {
  //Constructor prend deux paramètres : le nom de l'arme et son dommage (par défaut 10)
  constructor(name, damage = 10) {
    //Initialisation de la propriété "name" avec le nom fourni
    this.name = name;
    //Initialisation de la propriété "damage" avec le dommage fourni (ou 10 par défaut)
    this.damage = damage;
  }
}

//Exportation de la classe Shield pour pouvoir l'utiliser dans d'autres fichiers
module.exports = Weapon;
