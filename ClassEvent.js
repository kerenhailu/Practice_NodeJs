const httpServer = require('http').Server;
const fs=require('fs');
class ClassEvent extends httpServer {
constructor(){
    super();
    this.listen(1998)
    this.on("request",this.FunCallBack)
}
FunCallBack(request,response){
   fs.readFile('./ToClassEvent.txt',(err,res)=>{
       if(err)response.end('error in class event')
       response.end(res.toString())
   }) 
}
}
module.exports=new ClassEvent();
