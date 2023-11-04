const express=require("express");
const router=express.Router();
const Book=require("../models/book.js");
const book = require("../models/book.js");
router.get("/",async (req,res)=>{
    try{
        const bookdb=await Book.find();
        res.json(bookdb);
    }
    catch(err){
        console.log("Error.."+err)
    }
    
})

router.post("/",async(req,res)=>{
    const book= new Book({
        book_name: req.body.book_name,
        author: req.body.author,
        desc: req.body.desc
    })
    try{
        const data=await book.save()
        res.json(data);
    }
    catch(err){
        console.log("Error: "+err);
    }
})
router.patch("/:id",async(req,res)=>{
    
    try{
        const bk=await Book.findById(req.params.id);
        bk.book_name="Sleeping Murder"
        const data=await bk.save()
        res.json(bk);
    }
    catch(err){
        console.log("Error: "+err);
    }
})


module.exports=router
