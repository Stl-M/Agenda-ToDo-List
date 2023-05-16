/////agenda_list, agenda_post, agenda_delete ////

const Agenda= require('../models/agenda');

const agenda_list = async(req, res) => {
    Agenda.find({}).sort({createdAt: -1})
    .then((result) => {
        res.render('list', {listTitle: "Agenda",  minutes: result})
    })
    .catch((err) => {
        console.log('err');
    });
};


const agenda_post = (req, res) => {
    const addItem  = req.body.newItem
    const meeting = new Agenda({name: addItem}); 

    meeting.save()
    .then((result) => {
        res.redirect("/")
    })
    .catch((err) => {
        console.log(err);
    });
};

const agenda_delete = (req,res) =>{
    const item = req.body.checkbox
    Agenda.findByIdAndRemove(item)
    .then(()=> {
       res.redirect("/")
    })
    .catch((err)=> {
        console.log(err)
    });
};

module.exports = {
    agenda_list,
    agenda_post,
    agenda_delete
};