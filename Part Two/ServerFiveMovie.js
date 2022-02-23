const fs = require("fs");
const HttpServer = require("http").Server;
const util = require("util");
const readFilePromise = util.promisify(fs.readFile);
class ServerFiveMovie extends HttpServer {
  constructor() {
    super();
    this.on("request", this.FunCallBack);
    this.listen(9999);
  }
  FunCallBack(request, response) {
    readFilePromise("./FiveMovie.json")
      .then((data) => {
        response.end(data);
      })
      .catch((error) => {
        response.end("error");
      });
  }
}
module.exports = new ServerFiveMovie();