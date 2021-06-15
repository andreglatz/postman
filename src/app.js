const { json } = require("body-parser");
const express = require("express");

const upload = require("multer")({ dest: "templates/" });

const makeListTemplatesController = require("./factories/list-templates-controller-factory");
const makeUploadTemplateController = require("./factories/upload-templatesc-controller-factory");
const makeSendEmailController = require("./factories/send-email-controller-factory");

class App {
  #app;

  constructor() {
    this.#app = express();

    this.#middlewares();
    this.#routes();
  }

  #middlewares() {
    this.#app.use(json());
  }

  #routes() {
    this.#app.post("/templates", upload.single("template"), makeUploadTemplateController().handle);
    this.#app.get("/templates", makeListTemplatesController().handle);
    this.#app.post("/email", makeSendEmailController().handle);
  }

  init() {
    this.#app.listen(3000, () => console.log(`Server listening at ${process.env.HOST}:${process.env.PORT}`));
  }
}

module.exports = App;
