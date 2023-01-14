let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    titre: String,
    nomEleve: String,
    dateDeRendu: Date,
    matiere: String,
    rendu: Boolean,
    remarque: String,
    note: Number,
    favorite: Boolean
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('assignment', AssignmentSchema);
