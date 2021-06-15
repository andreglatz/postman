class ListTemplatesController {
  #fileSystem;

  constructor({ fileSystem }) {
    this.#fileSystem = fileSystem;

    this.handle = this.handle.bind(this);
  }

  async handle(request, response) {
    const fileNames = await this.#fileSystem.getTemplateNames();
    return response.status(200).json({ fileNames });
  }
}

module.exports = ListTemplatesController;
