

export class Note { 
    date: string;
    nom: string;
    montant: number;
    devise: string;
    commentaire:string;
    valid: boolean;
    
    constructor(date: string, nom: string, montant: number, devise:string, commentaire: string){
        this.date = date;
        this.nom =  nom;
        this.montant = montant;
        this.devise = devise;
        this.commentaire = commentaire;
        this.valid = false;
    }
    
}