//Importing express
const express = require("express")

//Initialisation
const app = express()

//appln will now use only json format data
app.use(express.json())

//PORT num
const PORT = 8081

const toDoList = ["hello everyone","g'evening all"]

//http://localhost:8081/todos
app.get("/todos",(req,res)=>{
    res.status(200).send(toDoList)
})
app.post("/todos",(req,res)=>{
    let newToDoItem = req.body.item
    toDoList.push(newToDoItem)
    res.status(201).send({
        message:"Task added Succesfully"
    })
})
app.delete("/todos",(req,res)=>{
    const itemToDelete = req.body.item
    toDoList.find((each,i)=>{
        if (each === itemToDelete) {
            toDoList.splice(i,1)
        }
    })
    res.status(204).send({
        message:"Item Deleted"
    })
})
app.all("/todos",(req,res)=>{
    res.status(501).send()
})
app.all("*",(req,res)=>{
    res.status(404).send()
})
app.listen(PORT,()=>{
    console.log(`Node-Express Server Started Running Succesfullyon port ${PORT}`);
})
