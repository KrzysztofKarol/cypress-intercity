const {user, pass, to} = require('./config');

const send = require('gmail-send')({
    user,
    pass,
    to,
    subject: 'Bilet dostępny!',
});

const filepath = './cypress/screenshots/intercity.spec.js/Intercity -- Check if tickets are still unavailable (failed).png';

send({
    files: [filepath],
}, function (err, res) {
    console.log('* [example 1.1] send() callback returned: err:', err, '; res:', res);
});
