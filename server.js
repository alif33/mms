const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
require('dotenv').config()
const app = express();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.get('/', async(req, res)=>{
    const user = new User({
        name: 'ismail'
    })

   const succ = await user.save();
   if(succ){
        res.send(succ);
   }
})



const PORT = process.env.PORT || 4000
app.listen(PORT, async()=>{
    
})