var UserSchema = new mongoose.Schema({
    nom: String,
    prenom: String
})

UserSchema.plugin(mongoosePaginate)
const User = mongoose.model('User', UserSchema)

module.exports = User;