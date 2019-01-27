const mongoose = require('mongoose');

const URI =  'mongodb+srv://CarliC:' + '_56lajefa'+ '@contacto-e308y.mongodb.net/test?retryWrites=true';


mongoose.connect(URI,{useNewUrlParser: true})
        .then(db => console.log('connected to DB'))
        .catch(err => console.error(err));

module.exports = mongoose;