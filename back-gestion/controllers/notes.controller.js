// Accessing the Service that we just created

var NoteService = require('../services/note-de-frais.service')

// Saving the context of this module inside the _the variable

_this = this


// Async Controller function to get the To do List

exports.getNotes = async function(req, res, next){

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    try{
    
        var notes = await NoteService.getNotes({}, page, limit)
        
        // Return the notets list with the appropriate HTTP Status Code and Message.
        
        return res.status(200).json({status: 200, data: notes, message: "Succesfully Notes Recieved"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createNote = async function(req, res, next){

    // Req.Body contains the form submit values.

    var note = {
        nom: req.body.nom,
        date: req.body.date,
        montant: req.body.montant,
        devise: req.body.devise,
        commentaire : req.body.commentaire,
        valid : false
    }

    try{
        
        // Calling the Service function with the new object from the Request Body
    
        var createdNote = await NoteService.createNote(note)
        return res.status(201).json({status: 201, data: createdNote, message: "Succesfully Created Note"})
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: "Note Creation was Unsuccesfull"})
    }
}

exports.updateNote = async function(req, res, next){

    // Id is necessary for the update

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var note = {
        id,
        nom: req.body.nom ? req.body.nom : null,
        date: req.body.date ? req.body.date : null,
        montant: req.body.montant ? req.body.montant : null,
        devise: req.body.devise ? req.body.devise : null,
        commentaire: req.body.commentaire ? req.body.commentaire : null
    }

    try{
        var updatedNote = await NoteService.updateNote(note)
        return res.status(200).json({status: 200, data: updatedNote, message: "Succesfully Updated Note"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeNote = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await NoteService.deleteNote(id)
        return res.status(204).json({status:204, message: "Succesfully Note Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}