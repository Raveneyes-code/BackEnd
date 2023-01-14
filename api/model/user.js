const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    nomprenom:{type:String},
    email:{type:String, unique:true},
    motdepasse:{type:String, required: true},
    created_at:{type:Number, default:Date.now().valueOf()},
    updated_at:{type:Number, default:Date.now().valueOf()}
})

module.exports = mongoose.model('User', userSchema)