const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

module.exports = app => {

    router.post('/api/form', (req, res) => {
        nodemailer.createTestAccount((err, account) => {
            const htmlEmail = `
                <h3>Detalles de Contacto</h3>
                <ul>
                <li>Nombre: ${req.body.name}</li>
                <li>Teléfono: ${req.body.phone}</li>
                <li>Email: ${req.body.email}</li>
                </ul>
                <h3>Mensaje</h3>
                <p>${req.body.message}</p>
            `;

            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'carlic.dev@gmail.com',
                    pass: 'Hdeotjfrk1547'
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            let mailOptions = {
                from: '"BigSlick Development" <carlic.dev@gmail.com>',
                to: 'gugakuer01@hotmail.com',
                replyTo: 'test@tester.com',
                subject: 'Nuevo Contacto',
                text: req.body.message,
                html: htmlEmail
            }

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return console.log(err);
                } else {
                    console.log('Message sent: %s', info.message);
                    console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
                }
            });
        });
    });

    app.use(router);
}