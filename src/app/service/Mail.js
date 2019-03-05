const nodemailer = require('nodemailer');
const mailfConfig = require('../../config/mail');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');
const exphbs = require('express-handlebars');

const transport = nodemailer.createTransport(mailfConfig);
// transport.use(
//   'compile',
//   hbs({
//     viewEngine: exphbs(),
//     viewPath: path.resolve(__dirname, '..', 'views', 'emails'),
//     extName: '.hbs',
//   }),
// );
module.exports = transport;
