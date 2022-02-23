// const fs = require("fs");
// const HttpServer = require("http").Server;
// class ServerClass extends HttpServer {
//   constructor() {
//     super();
//     this.on("request", this.FunCallBack);
//     this.listen(8888);
//   }
//   FunCallBack(request, response) {
//     fs.readFile("./MovieFile.txt", (err, result) => {
//       if (err) response.end('error in Movie File');
//       response.end(result.toString())
//     });
//   }
// }
// module.exports=new ServerClass();

// 14.	שפרו את הקוד כך שיעבוד בצורה אסינכרונית.
const fs = require("fs");
const HttpServer = require("http").Server;
const util = require("util");
const readFilePromise = util.promisify(fs.readFile);
class ServerClass extends HttpServer {
  constructor() {
    super();
    this.on("request", this.FunCallBack);
    this.listen(8888);
  }
  FunCallBack(request, response) {
    readFilePromise("./MovieFile.txt")
      .then((data) => {
        response.end(data);
      })
      .catch((error) => {
        response.end("error");
      });
  }
}
module.exports = new ServerClass();
