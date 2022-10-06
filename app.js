import express from "express";

const app=express()

app.listen(4000,()=>{
    console.log('server listen on port:4000')
})

app.get('/',async(req, res)=>{
    try {
        let key= req.query.key
        let name= req.query.name
        console.log(req.query)
        res.send(`wellcome your name is ${name} and key=${key}`)
    } catch (error) {
        res.send('error')
        
    }
})