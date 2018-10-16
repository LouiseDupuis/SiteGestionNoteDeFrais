var UserSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    pseudo: String,
    admin: Boolean
})

UserSchema.plugin(mongoosePaginate)
const User = mongoose.model('User', UserSchema)

module.exports = User;