import mongoose from "mongoose"

const RentalItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    imageLinks: {
        type: Array,
    },
    price: {
        type: Number,
    },
    availability: {
        type: Boolean,
        required: true
    }, 
    categories: {
        type: Array
    }
})

const RentalItem = mongoose.models.RentalItem || mongoose.model("RentalItem", RentalItemSchema)

export default RentalItem