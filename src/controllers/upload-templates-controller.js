class UploadTemplatesController {
  #fileSystem;

  constructor({ fileSystem }) {
    this.#fileSystem = fileSystem;

    this.handle = this.handle.bind(this);
  }

  async handle(request, response) {
    const { filename, originalname } = request.file;
    await this.#fileSystem.renameTemplate(filename, originalname);
    return response.status(200).send();
  }
}

module.exports = UploadTemplatesController;
