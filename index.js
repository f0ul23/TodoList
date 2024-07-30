const express = require('express');
const cors = require('cors');
require('./db/config');     //Connection
const User = require('./db/model');       //Schema
const app = express();

app.use(express.json());
app.use(cors())
app.post('/signup',async (req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})

app.post('/login',async(req, res)=>{
    if(req.body.email && req.body.password){
        let user = await User.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }else{
            res.send({result:"User not found!"})
        }
    }else{
        res.send({result:"User not found!"})
    }
})

app.listen(5000);