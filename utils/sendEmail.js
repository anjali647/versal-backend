// demo mailer: logs to console. swap with nodemailer/sendgrid in prod.
module.exports = async function sendEmail({ to, subject, text, html }) {
  console.log("=== EMAIL (mock) ===");
  console.log({ from: process.env.EMAIL_FROM, to, subject, text, html });
  console.log("====================");
  return true;
};
