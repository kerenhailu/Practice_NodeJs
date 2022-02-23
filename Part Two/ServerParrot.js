const fs = require("fs");
const HttpServer = require("http").Server;
const util = require("util");
const readFilePromise = util.promisify(fs.readFile);
class ServerParrot extends HttpServer {
  constructor() {
    super();
    this.on("request", this.FunCallBack);
    this.listen(8989);
  }
  FunCallBack(request, response) {
    readFilePromise("./Parrot.json")
      .then((data) => {
        response.end(data);
      })
      .catch((error) => {
        response.end("error");
      });
  }
}
module.exports = new ServerParrot();