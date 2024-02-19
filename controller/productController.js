const productSchema = require("../models/productSchema");
const Userlist = require("../models/userSchema");
const variantSchema = require("../models/variantSchema");

async function secureProduct(req, res, next) {
  const userid = req.headers.authorization.split("@")[1];
  const password = req.headers.authorization.split("@")[2];

  if (!req.headers.authorization) {
    return res.json({ err: "UNAUTHORIZATION" });
  } else {
    const user = await Userlist.find({ _id: userid });
    if (user.length > 0) {
      if (password == "1vfe$3XOn=y3") {
        if (user[0].role == "merchant") {
          next();
        }
      } else {
        res.json({ erroe: "u r not able to upload" });
      }
    } else {
      res.json({ erroe: "u r not able to upload" });
    }
  }
}

function createProductController(req, res) {
  const { name, description, store } = req.body;

  const product = new productSchema({
    name,
    description,
    store,
  });
  product.save();
  res.json({ success: "product created successfully done" });
}

async function createvariantController(req, res) {
  const { image, color, storage, ram, price, quantity, size, product } =
    req.body;
  console.log(req.file);
  //   const variant = new variantSchema({
  //     image,
  //     color,
  //     storage,
  //     ram,
  //     price,
  //     quantity,
  //     size,
  //     product,
  //   });
  //   variant.save();

  //   await productSchema.findOneAndUpdate(
  //     { _id: variant.product },
  //     { $push: { variants: variant._id } },
  //     { new: true }
  //   );
}

module.exports = {
  secureProduct,
  createProductController,
  createvariantController,
};
