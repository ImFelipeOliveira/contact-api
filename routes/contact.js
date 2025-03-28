var express = require("express");
var router = express.Router();
const Contact = require("../database/models");
const { transporter, setMailData } = require("../service/emailService");

/* GET all contacts messages. */
router.get("/", async function (req, res) {
  const contacts = await Contact.findAll();
  return res.status(200).json(contacts);
});

//** GET a contact by id */
router.get("/:id", async function (req, res) {
  const pk = await req.params.id;
  const contact = await Contact.findByPk(pk);

  if (contact) return res.status(200).json(contact);

  return res.status(406).json({ error: "Não há um contanto com esse id." });
});

//** POST a contact */
router.post("/", async function (req, res) {
  const { name, email, subject, message } = req.body;

  const existingContact = await Contact.findOne({ where: { email } });

  if (existingContact) {
    return res
      .status(409)
      .json({ error: "Já existe um contato com esse email." });
  }

  try {
    const contact = await Contact.create({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });

    if (contact) {
      const mailData = await setMailData(req.body);

      try {
        const info = await transporter.sendMail(mailData);
        return res.status(200).json({
          message: "Mensagem enviada com sucesso.",
          message_id: info.messageId,
        });
      } catch (erro) {
        console.error("Erro ao enviar e-mail:", error);
        return res.status(500).json({ error: "Erro ao enviar e-mail." });
      }
    }
    return res
      .status(400)
      .json({ error: "Ocorreu algum erro ao salvar a mensagem a mensagem." });
  } catch {
    return res
      .status(500)
      .json({ error: "Ocorreu algum erro ao salvar a mensagem." });
  }
});

module.exports = router;
