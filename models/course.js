const mongoose = require("mongoose"), 
{ Schema } = require ("mongoose"), 
courseSchema = new Schema(
    {
        title: {
            type: String, 
            require: true, 
            unique: true, 
        },
        description: {
            type: String,
            required: true
        },
        maxStudnets: {
            type: Number, 
            default: 0, 
            min = [0, "Course can not have negative num. of students"]
        },
        cost: {
            type: Number, 
            default: 0, 
            min: [0, "Costs could not be negative values"]
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Course", courseSchema);