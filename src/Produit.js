export default class Produit {
    constructor (id,nom, qte,photo) {
    this._nom = nom;
    this._qte = qte;
    this._photo = photo;
    this._id = id;
    }
    get nom() {
    return this._nom;
    }
    get id() {
    return this._id
    }
    get qte() {
    return this._qte
    }
    get photo() {
        return this._photo
    }

    set qte(qte) {
    this._qte = qte;
    }

}