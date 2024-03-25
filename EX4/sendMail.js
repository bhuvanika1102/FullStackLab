const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: '' 
  }
});
const mailOptions = {
  from: '',
  to: '',
  subject: 'Node.js Mailer',
  text: 'Hello from Node.js!'
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('Email sent:', info.response);
  }
});

