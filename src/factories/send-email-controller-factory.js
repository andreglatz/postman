const SendEmailController = require("../controllers/send-email-controller");
const FileSystemAdapter = require("../file-system-adapter");
const Postman = require("../postman");

module.exports = function makeSendEmailController() {
  const postman = new Postman();
  const fileSystem = new FileSystemAdapter();

  return new SendEmailController({ postman, fileSystem });
};
