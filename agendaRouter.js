const express = require('express');
const Agenda = require('../models/agenda');
const router = express.Router();
const agendaController = require ('../controllers/agendaController');



router.get("/", agendaController.agenda_list);

router.post("/", agendaController.agenda_post);

router.post("/delete",agendaController.agenda_delete);


module.exports = router; 