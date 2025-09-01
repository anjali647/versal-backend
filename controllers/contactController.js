const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

exports.submitContact = async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message)
    return res.status(400).json({ message: "All fields are required" });

  const saved = await Contact.create({ name, email, subject, message });

  await sendEmail({
    to: "support@burro.ai",
    subject: `New Contact: ${subject}`,
    text: `${name} <${email}> wrote:\n\n${message}`,
  });

  res.status(201).json({ message: "Message received", ticketId: saved._id });
};
