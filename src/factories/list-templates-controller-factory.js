const ListTemplatesController = require("../controllers/list-templates-controller");
const FileSystemAdapter = require("../file-system-adapter");

module.exports = function makeListTemplatesController() {
  const fileSystem = new FileSystemAdapter();
  return new ListTemplatesController({ fileSystem });
};
