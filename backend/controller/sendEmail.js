const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: "smpt.gmail.com",
    port: 465,
    service: "gmail",
    auth: {
      user: "naeemabdulrehman08@gmail.com",
      pass: "bsf2000793",
    },
  });

  const mailOptions = {
    from: "mymailforabhi@gmai.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;