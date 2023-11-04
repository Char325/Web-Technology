const express=require("express");
const mongoose=require("mongoose");
const url='mongodb://127.0.0.1:27017/book';

const app=express();

mongoose.connect(url,{
    useNewUrlParser:true
})

const con=mongoose.connection
con.on('open',function(){
    console.log("Mongo connected!");
})

const bookRouter=require("./routes/book");
app.use(express.json());
app.use("/book",bookRouter);
app.listen(8000,function(){
    console.log("Listening on 8000...");
})
