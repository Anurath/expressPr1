const { addAbortListener } = require("events");
const e = require("express");
const express=require("express");
const app=express();
const path=require("path");
const port =3000;

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));

app.set("view engine","ejs");

app.listen(port,()=>{
    console.log(`Server is being listining your request on the port number ${port}`);
})
app.get("/ig/:username",(req,res)=>{
    let allData=require("./data.json");
    let {username}=req.params;
    let data=allData[username]
    res.render("rend.ejs",{data});
    console.log(data);
})
