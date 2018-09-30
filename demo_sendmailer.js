var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});

var mailOptions = {
    from: '',
    to: 'admin@gmail.com',
    subject: 'Sending email using Node.js',
    text: 'That was easy!'
}

transporter.sendMail(mailOptions, function(err, info) {
    if(err) {
        console.log(err);
    }
    else {
        console.log('Email send:', info.response);
    }
});
