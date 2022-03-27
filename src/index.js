const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/views")));

app.get("/",(req,res)=>{
	res.sendFile(path.join(__dirname,"./views/index.html"));
})

app.get("/login",(req,res)=>{
	res.sendFile(path.join(__dirname,"./views/login.html"));
})

app.listen(4200,()=>console.log("Server Ready"));

