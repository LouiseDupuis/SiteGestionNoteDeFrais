// Gettign the Newly created Mongoose Model we just created 

var Note = require('../models/note.model')

// Saving the context of this module inside the _the variable

_this = this

// Async function to get the To do List

exports.getNotes = async function(query, page, limit){

    // Options setup for the mongoose paginate

    var options = {
        page,
        limit
    }
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var notes = await Note.paginate(query, options)
        
        // Return the todod list that was returned by the mongoose promise

        return notes;

    } catch (e) {

        // return a Error message describing the reason 

        throw Error('Error while Paginating Notes')
    }
}

exports.createNote = async function(note){
    
    // Creating a new Mongoose Object by using the new keyword

    var newNote = new Note({
        nom: note.nom,
        date: note.date,
        montant: note.montant,
        devise: note.devise,
        commentaire: note.commentaire,
        valid: false
    })

    try{

        // Saving the Todo 

        var savedNote = await newNote.save()

        return savedNote;
    }catch(e){
      
        // return a Error message describing the reason     

        throw Error("Error while Creating Todo")
    }
}

exports.updateNote = async function(note){
    var id = note.id

    try{
        //Find the old Note Object by the Id
    
        var oldNote = await Note.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Note")
    }

    // If no old Note Object exists return false

    if(!oldNote){
        return false;
    }

    console.log(oldNote)

    //Edit the Todo Object

    oldNote.nom = note.nom
    oldNote.montant = note.montant
    oldNote.devise = note.devise
    oldNote.commentaire = Note.commentaire


    console.log(oldNote)

    try{
        var savedNote = await oldNote.save()
        return savedNote;
    }catch(e){
        throw Error("And Error occured while updating the Note");
    }
}

exports.deleteNote = async function(id){
    
    // Delete the Note

    try{
        var deleted = await Note.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Note Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Note")
    }
}

