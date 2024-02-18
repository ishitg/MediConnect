import express from "express";
import bodyParser  from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));  
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/login",(req,res)=>{
    res.render("login.ejs");
})



app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
})