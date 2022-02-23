const fs = require("fs");
const ServerHttp = require("http").Server;
class ClassAskTen extends ServerHttp {
  constructor() {
    super();
    this.on("request", this.callBackFun);
    this.listen(1997);
  }
  callBackFun(request, res) {
    fs.readFile("./classAskTen.txt", (err, result) => {
      if (err) throw err;
      res.end(result.toString());
    });
  }
}
module.exports=new ClassAskTen();