const UploadTemplatesController = require("../controllers/upload-templates-controller");
const FileSystemAdapter = require("../file-system-adapter");

module.exports = function makeUploadTemplatesController() {
  const fileSystem = new FileSystemAdapter();
  return new UploadTemplatesController({ fileSystem });
};
