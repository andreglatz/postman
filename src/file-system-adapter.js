const fs = require("fs/promises");

class FileSystemAdapter {
  async getTemplateContent(fileName) {
    return await fs.readFile(`${__dirname}/../templates/${fileName}.html`);
  }

  async renameTemplate(oldFileName, newFileName) {
    await fs.rename(`${__dirname}/../templates/${oldFileName}`, `${__dirname}/../templates/${newFileName}`);
  }

  async getTemplateNames() {
    const files = await fs.readdir(`${__dirname}/../templates`);
    return files.map((file) => file.replaceAll(".html", ""));
  }
}

module.exports = FileSystemAdapter;
