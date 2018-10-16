import {Note} from './note_de_frais_classe';

export const listeNotes : Note[] = [
    {date: '1/10/2018',
    nom: "Matériel",
    montant: 60,
    devise: 'euros',
    commentaire:"blabla",
    valid: false},
    {date: '24/11/2018',
    nom: 'Déjeuner',
    montant:175,
    devise: 'dollars',
    commentaire:'blabla',
    valid: true},
    {date: '12/07/2018',
    nom: 'Générateurs d\'appoint',
    montant: 300,
    devise: 'euros',
    commentaire:' L\'installation électrique n\'étais pas suffisante',
    valid: false},
];