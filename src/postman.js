const nodemailer = require("nodemailer");

class Postman {
  #transporter;

  constructor() {
    this.#transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.TRANSPORTER_EMAIL,
        pass: process.env.TRANSPORTER_PASSWORD,
      },
    });
  }

  #getEmails({ emails, subject, content }) {
    return {
      from: process.env.TRANSPORTER_EMAIL,
      to: emails,
      subject,
      html: content,
    };
  }

  async send({ emails, subject, content }) {
    try {
      const emails = this.#getEmails({ emails, subject, content });
      await this.#transporter.sendMail();
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Postman;
