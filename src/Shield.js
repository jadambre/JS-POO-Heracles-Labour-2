//Définition de la classe Shield
class Shield {
  //Constructor qui prend en paramètre un niveau de protection (10 par défaut)
  constructor(protection = 10) {
    //Initialisation de la propriété "protection"
    this.protection = protection;
  }
}

//Exportation de la classe Shield pour pouvoir l'utiliser dans d'autres fichiers
module.exports = Shield;
