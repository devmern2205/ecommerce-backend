const mongoose = require('mongoose');
const { Schema } = mongoose;

const variantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    price: {
        type: String,
    },
    quantity: String,
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    created: {
        type: Date,
        default: new Date()
    },
    update: {
        type: Date
    }
})

module.exports = mongoose.model("Variant", variantSchema)