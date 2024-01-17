const CategoryList = require("../models/categorySchema");

async function createCategoryController(req, res){
  const {name,description} = req.body;
  const duplicateCategory = await CategoryList.find({name});
  if(duplicateCategory.length > 0  ){
    res.json({error: 'This category already exists, try again'})
  }
  const category = new CategoryList({
    name,
    description
  })
  res.json({success: 'Category create successfully'})
  category.save();
}

async function categoryStatusController(req,res){
  const {name,status} = req.body;
 

  if(status == 'rejected' || status == "waiting"){
    const updatecategory = await CategoryList.findOneAndUpdate(
      {name},
      {$set: {isActive: false, status: status}},
      {new: true}
    )
  }else if(status == 'approved'){
    const updatecategory = await CategoryList.findOneAndUpdate(
      {name},
      {$set: {isActive: true, status: status}},
      {new: true}
    )
  }
  res.json({success: "Status updated"})
}


module.exports = {createCategoryController, categoryStatusController};