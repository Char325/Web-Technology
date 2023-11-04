const mongoose=require("mongoose");
const bookSchema= new mongoose.Schema({
    book_name:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})

module.exports=mongoose.model('Book',bookSchema);
