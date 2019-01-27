const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Contact = require('../models/contact');

router.post('/', async (req, res, next) => {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ status: 'Mensaje recibido'});
})

module.exports = router;