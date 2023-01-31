const mongoose = require('mongoose')

const MitarbeiterSchema = new mongoose.Schema({
    id: Number,
    email: String,
    team: String,
    vorname: String,
    nachname: String
})

module.exports = mongoose.model('Mitarbeiter', MitarbeiterSchema)