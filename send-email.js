const {user, pass, to} = require('./config');

const send = require('gmail-send')({
    user,
    pass,
    to,
    subject: 'Bilet dostępny!',
});

const screenshot = './cypress/screenshots/intercity.spec.js/Intercity -- Check if tickets are still unavailable (failed).png';
const logs = './logs.txt';

send({
    files: [screenshot, logs],
}, function (err, res) {
    console.log('* [example 1.1] send() callback returned: err:', err, '; res:', res);
});
