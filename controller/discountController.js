const discountSchema = require("../models/discountSchema");

function discountController(req,res){
    const {cash, percent, flat, product, category, subCategory} = req.body;

    const discount = new discountSchema({
        cash, 
        percent, 
        flat, 
        product, 
        category, 
        subCategory
    })
    discount.save();

    res.send({success: "discount create successful"})
}

async function getDiscountController(req,res){
  const data =await discountSchema.find({}).populate(["product", "category", "subCategory"])
  res.send(data)
}
module.exports = {discountController, getDiscountController}