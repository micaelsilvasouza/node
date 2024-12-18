// Importar a biblioteca Nodemailer
const nodemailer = require('nodemailer');
console.log("Enviar email")
// Criar um objeto transportador
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3fc59107276a14",
    pass: "00efa2d6c3e909"
  }
});

// Configurar o objeto mailoptions
const mailOptions = {
  from: 'micael@email.com',
  to: 'aleatorio@naparada.com',
  subject: 'Enviando Email usando Node.js',
  text: 'Fala que eu te escuto!!!!!!'
};

// Enviar o email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Erro:', error);
  } else {
    console.log('Email enviado:', info.response);
  }
});