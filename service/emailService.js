const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.SMTPEMAIL,
    pass: process.env.SMTPPASSWORD,
  },
  secure: true,
});

async function setMailData(body) {
  const { name, email, subject, message } = body;
  const mailData = {
    from: process.env.SMTPEMAIL,
    to: process.env.FROMEMAIL,
    subject: subject,
    html: `
      <div>
        <h1>${subject}</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      </div>
    `,
  };
  return mailData;
}

module.exports = {
  transporter,
  setMailData,
};
