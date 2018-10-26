

export class Note { 
    _id : string;
    date: string;
    nom: string;
    montant: number;
    devise: string;
    commentaire:string;
    valid: boolean;

    contructor(){
        this.date = "";
        this.nom = "";
        this.montant = null;
        this.devise = "";
        this.commentaire = "";
        this.valid = false;

    }
    
   /*  constructor(date: string, nom: string, montant: number, devise:string, commentaire: string){
        this.date = date;
        this.nom =  nom;
        this.montant = montant;
        this.devise = devise;
        this.commentaire = commentaire;
        this.valid = false;
    } */
    
    
}