const http = require("http")

const PORT = 8081

const toDoList = ["hello everyone","g'morning all"]

http.createServer((req,res) => {
   const {method,url} = req
//    console.log(method,url);
    if (url === "/todos") {
        if(method === "GET"){
            res.writeHead(200)
            res.write(toDoList.toString())
        }else if(method==="POST"){
            let body = ""
            req.on('error',(err)=>{
                console.error(err);
            }).on('data',(chunks)=>{
                body += chunks
                // console.log(chunks);
            }).on('end',()=>{
                body=JSON.parse(body)
                // console.log(body);
                let newToDo = toDoList
                newToDo.push(body.item)
                console.log(newToDo);
            })
        }else if (method === "DELETE"){
            let body = ""
            req.on('error',(err)=>{
                console.error(err);
            }).on('data',(chunks)=>{
                body += chunks
            })
            .on('end',()=>{
                body = JSON.parse(body)
                let deleteThis = body.item

                for (let i = 0; i< toDoList.length; i++) {                  const element = array[i];
               if (toDoList[i]===deleteThis) {
                    toDoList.splice(i,1)
                    break
               }
                }
            })
        }
        else{
            res.writeHead(501)
        }
}   else if(url === "/"){

}   else{
    res.writeHead(200)
    res.write("Hello Muskan")
}
    res.end()
})
.listen(PORT,()=>{
    console.log(`NodeJs Srver is Up and Running Succesfully on Port ${PORT}`);
})
//http://localhost:8081
