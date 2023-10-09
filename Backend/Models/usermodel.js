const mongoose=require('mongoose')
const validator=require('validator')

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is require']
    },
    email:{
        type:String,
        required:[true,'email is require'],
        validate(val)
        {
        if(!validator.isEmail(val))
        {
        throw new Error("Enter valid email")
        }
        }
    },
    password:{
        type:String,
        required:[true,'password is require'],
    },
    wishlist:{
        type:[Number]
    }
})
const userModel = mongoose.model('Users',userSchema)

module.exports = userModel