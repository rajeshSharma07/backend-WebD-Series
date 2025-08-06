const express= require("express");
const app = express();

 let port=8080;

app.listen(port,() =>{
    console.log(`app is listening on port ${port}`);
});
//  handle request
//app.use((req, res)=>{
//console.log("request received");
//sending a response
//res.send("this is a basic response");
//});

// Routing:- It is process of selecting a path for traffic in a network.

app.get("/",(req,res)=>{
    res.send("you connected root path");
})

app.get("/apple", (req,res)=>{
    res.send("you connected apple path");
})

app.get("/orange",(req,res)=>{
    res.send("you connected orange path");
})

app.get("/:username/:id",(req, res)=>{
    console.log(req.params);
    res.send("Hello, I am Root");
})


// app.post("/",(req,res)=>{
//     res.send("you sent a post request to root");
// })