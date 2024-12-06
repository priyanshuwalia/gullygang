const express = require("express");
const app = express();
const port= 3000;
app.use(express.json())//
app.get(`/`, (req,res)=>{
    console.log("theory will only take you so far")
    res.json({
        msg:"hello there"
    })  
} );
app.post(`/`, (req,res)=>{
    console.log("kyaa haal h baaabe")
    res.json({
        msg:"hello there"
    })  
} );
app.listen(port, ()=>{
    console.log(`this is running on port ${port}`)
});
