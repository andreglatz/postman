class SendEmailController {
  #postman;
  #fileSystem;

  constructor({ postman, fileSystem }) {
    this.#postman = postman;
    this.#fileSystem = fileSystem;

    this.handle = this.handle.bind(this);
  }

  async handle(resquest, response) {
    const { emails, subject, template: fileName } = request.body;

    const content = await this.#fileSystem.getTemplateContent(fileName);
    await this.#postman.send({ emails, subject, content });

    return response.status(200).send();
  }
}

module.exports = SendEmailController;
