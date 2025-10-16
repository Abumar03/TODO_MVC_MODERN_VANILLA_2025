// La classe DB : " Service de livraison " qui sait où aller chercher les colis (l'API) et comment les récupérer.
// Elle est static, ce qui signifie qu'on n'a pas besoin de fabriquer un objet DB pour l'utiliser.
// Elle a deux méthodes :
//      setApiURL(data) : Définit l'adresse de l'API (comme donner l'adresse d'un entrepôt au livreur).
//      findAll() : Va chercher toutes les tâches dans l'API (comme demander au livreur d'aller chercher tous les colis dans l'entrepôt).

export default class DB {
  static setApiURL(data) {
    this.apiURL = data;
  }

  static async findAll(){
    const response = await fetch(this.apiURL + "todos");
    return response.json();
  }
}