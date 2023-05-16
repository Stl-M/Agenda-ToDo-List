const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const agendaSchema = new Schema({
    name: String
}, {timestamps: true});

const Agenda = mongoose.model('Agenda', agendaSchema);

module.exports= Agenda;