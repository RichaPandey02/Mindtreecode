const {books}=require('./Node-mongo/DB/model/books.model');
const express=require("express");
const mongoUtils=require("./Node-mongo/DB/mongoUtils");
const app=express();

mongoUtils.mongooseConnect();

app.use(express.json());

const { response } = require('express');
const { Schema } = require('mongoose');

const dummyData=[
    
    {isbn:1234567890,status:true},
    {bookName:"Ramayana",status:true},
    {bookAuthor:"Tulsi Das",status:true},
    {bookPublisher:"Richa Pandey",status:true},
    {numberOfPages:700,status:true}
   
]
app.get("/books",(req,res)=>{
    books.find((err,docs)=>{
    if(err)console.log(err);
    
    console.log(docs);


    })
    res.send(dummyData);
    
})

app.post("/books",(req,res)=>{
    if(req.body)
    {
        const booksData=new books(req.body);
        booksData.save().then(response=>{
            return res.send(response);

         }).catch(err=>{
          console.log(error);
        })
    }
    

    })

    app.patch("/books/:id",async(req,res)=>{
        const doc=await books.findByIdAndUpdate(req.params.id,req.body,{

            new : true,
            runValidators:true
        });
        if(!doc)
        {
            return res.status(404).json({
                status:'fail',
                message:'Invalid Id',
            });
        }
        res.status(200).json({
            status:'success',
            data:{
                data:doc
            }
        })
        
        app.delete("/books/:id",async(req,res)=>{
            const doc=await books.findByIdAndDelete(req.params.id,req.body,{
    
                new : true,
                runValidators:true
            });
            if(!doc)
            {
                return res.status(404).json({
                    status:'fail',
                    message:'Invalid Id',
                });
            }
            res.status(200).json({
                status:'success',
                data:{
                    data:doc
                }
            });
            
app.listen(9001, ()=>{
    console.log("Server started at PORT 9001");
})
        