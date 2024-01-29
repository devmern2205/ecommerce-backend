const Userlist = require("../models/userSchema");


async function secureProduct(req, res, next){
 const userid = req.headers.authorization.split('@')[1];
 const password = req.headers.authorization.split('@')[2];

 if(!req.headers.authorization){
  return res.json({err: "UNAUTHORIZATION"})
 }else{
   const user = await Userlist.find({_id: userid});
   if(user.length > 0){

    if(password == "1vfe$3XOn=y3"){
        if(user[0].role == "merchant"){
        next()

    }
    }else{
        res.json({erroe: "u r not able to upload"})
    }
   
   }else{
    res.json({erroe: "u r not able to upload"})
   }
 }
}


function createProduct (req, res){
    res.json({success: "product createddddddd"})
}

module.exports = {secureProduct, createProduct}