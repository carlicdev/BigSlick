const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        createIndexes: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        },
    message: { type: String, required: true}
});

module.exports = mongoose.model('Contact', contactSchema);