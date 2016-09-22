var nodemailer = require('nodemailer');
var pug = require('pug');

var compiledFunction = pug.compileFile('src/index.pug');
var data = require('./data.json');
var html = compiledFunction(data);

var emailSettings = require('./emailSettings.js');

transporter = nodemailer.createTransport(emailSettings.transportInfo);

var mailOptions = {
	from: emailSettings.transportInfo.auth.user,
	to: emailSettings.recipients,
	subject: 'Email Test',
	html: html
};

function sendHandler(error, res) {
	if(error) {
		return console.log(error);
	}
	console.log('Message sent: ' + res.response);
};

transporter.sendMail(mailOptions, sendHandler);