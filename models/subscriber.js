const { TOO_MANY_REQUESTS } = require("http-status-codes")
const mongoose = require("mongoose"), 
{ Schema } = require ("mongoose"), 
Course = require("./course")
subscriberSchema = new Schema({
        name: {
            type: String,
            required: true
        }, 
        email: {
            type: String,
            required: true,
            unique: true
        },
        zipCode: {
            type: Number,
            min: [10000, "Zip code too short"],
            max: 99999
        },
        courses:[{type: mongoose.Schema.Types.ObjectId, ref: Course}]
    }, {
        timestamps: true
    });


subscriberSchema.methods.getInfo = function (){
    return `Name: ${this.name} Email: ${this.email} Zipcode: ${this.zipCode}`;
}

module.exports = mongoose.model("Subscriber", subscriberSchema);