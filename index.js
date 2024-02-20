import express from "express";
import bodyParser  from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static("public"));  
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.redirect("/home");
})

app.get("/home",(req,res)=>{
    res.render("home.ejs");
});

app.get("/login",(req,res)=>{
    res.render("login.ejs");
});

app.get("/hospitals",(req,res)=>{
    res.sendFile(path.join(__dirname, '/views/hospitals.html'))
});


    

app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
});

