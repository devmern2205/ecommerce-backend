const productSchema = require("../models/productSchema");
const Userlist = require("../models/userSchema");
const variantSchema = require("../models/variantSchema");


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


function createProductController (req, res){
    const {name, description, price, image, store} = req.body;
    

    const product = new productSchema({
        name, 
        description, 
        price, 
        image,
        store  
    })
    product.save()
    res.json({success: "product created successfully done"});
}


async function createvariantController(req,res){
    const {name, description, price, quantity,product } = req.body;
    
    const variant = new variantSchema({
        name, description, price, quantity, product 
    })
    variant.save();

    await productSchema.findByIdAndUpdate(
        { _id: variant._id},
        {$push: {variants: variant.product}},
        {new: true}
    )
    

}

module.exports = {secureProduct, createProductController, createvariantController}