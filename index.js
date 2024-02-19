import express from "express";
import bodyParser  from "body-parser";
import axios from 'axios'

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



app.get("/hospitals",(req,res)=>{
    axios.get('http://www.communitybenefitinsight.org/api/get_hospitals.php')
    .then(response => {
        res.render("hospitals.ejs",{hospData:response.data});
    })
    .catch(err => {
        console.error(err);
    });
})




app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
})