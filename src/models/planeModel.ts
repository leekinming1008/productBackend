import {Schema, model} from "mongoose"

const planeSchema = new Schema({
    image: {
        type: String,
        required: [true, "Image URL is required"],
    },
    factory: {
        type: String,
        required: [true, "Factory is required"],
        maxlangth: 50,
    },
    name: {
        type: String,
        required: [true, "Name text required."],
        maxlangth: 50,
    },
    price: {
        type: Number,
        required: [true, "Price is required."],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    airline: {
        type: String,
        required: [true, "Airline is required"]
    },
    year: {
        type: Number,
        required: [true, "Year is required"],
    }
})

export default model("plane", planeSchema)