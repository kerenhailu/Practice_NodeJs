const fs=require('fs');
const events=require('events')
class ClassEvent11 extends events{
    constructor(){
        super();
        this.on('req',this.CBFun)
    };
    CBFun(){
        fs.readFile('./childjson.json',JSON.stringify(["dddd","sfsf"]),()=>{})
    };
    funEmit(){
        this.emit('req');
    }  
}
module.exports=new ClassEvent11();