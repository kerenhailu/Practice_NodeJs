const HttpSERVER=require('http').Server;
const fs=require('fs');
const util=require('util')
const readFilePromise=util.promisify(fs.readFile)
class ServerClass extends HttpSERVER{
    constructor(){
        super();
        this.on('request',this.FunCallBack)
        this.listen(1234)
    }
    FunCallBack(request,responce){
readFilePromise('./City.txt')
.then((data)=>{responce.end(data)})
.catch((err)=>{responce.end('error in city')})
    }
}
module.exports=new ServerClass();