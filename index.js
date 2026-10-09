require('dotenv').config();
const express = require('express');
const app = express();
const port = 4503;
app.get('/',(req,res)=>{
    res.send("Welcometo home page");

});

app.get('/leetcode',(req,res) =>{
    res.send("Here is the leetcode profile : https://leetcode.com/u/SahilSingh8077/");
});

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${port}`);

});
