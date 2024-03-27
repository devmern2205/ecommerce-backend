var jwt = require('jsonwebtoken');
const UserList = require('../models/userSchema');

async function verificationController(req,res){
    const {id} = req.params
    console.log(id);
    const decoded =  jwt.verify(id, "baig");
    console.log(decoded);
    if(decoded){
        const updateUser = await UserList.findOneAndUpdate(
            {email: decoded.email},
            {verified: true},
            {new: true}
           )  
           res.json({success: "email verification done"})
    }else{
        res.json({error: "hoi nai"})
    }
}
module.exports = verificationController