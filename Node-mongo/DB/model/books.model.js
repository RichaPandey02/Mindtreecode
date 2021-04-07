const mongoose=require('mongoose');
const { default: validator } = require('validator');
const bookInfo=mongoose.Schema({
    isbn:{
        status:true,
        type:Number,
    //    validate(value)
    //    {
    //        if(isbn.length!=10)
    //        {
    //             throw console.error();
    //        }
    //    }
    },
    bookName:{
        status:true,
        type:String
    },
    bookAuthor:{
        status:true,
        type:String
    },
    bookPublisher:{
        status:true,
        type:String
    },
    numberOfPages:{
        status:true,
        type:Number
    }
})
const books=mongoose.model("books",bookInfo);
module.exports={books};