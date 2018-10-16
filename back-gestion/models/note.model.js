var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var NoteSchema = new mongoose.Schema({
    nom: String,
    date: String,
    montant: Number,
    devise: String,
    commentaire: String,
    valid : Boolean
})

NoteSchema.plugin(mongoosePaginate)
const Note = mongoose.model('Note', NoteSchema)

module.exports = Note;