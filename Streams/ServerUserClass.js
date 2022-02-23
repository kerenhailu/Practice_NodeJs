const fs = require("fs");
const httpEvent = require("http").Server;
class ServerUserClass extends httpEvent {
  constructor() {
    super();
    this.listen(3002);
    this.on("request", this.callBalckFun);
  }
  callBalckFun(req, res) {
    let num = 0;
    const Stream = fs.createReadStream("./User.json");
    Stream.pipe(res)
  }
}
module.exports = new ServerUserClass();
