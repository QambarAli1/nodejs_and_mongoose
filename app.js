const { response } = require('express');
const express = require('express');
const { request } = require('http');

const mongoose = require('mongoose');
const postModel = require('./schema');

const app = express();
const port = 5000;

const db_uri = "mongodb+srv://admin:admin@cluster0.mhpe2.mongodb.net/test"
mongoose.connect(db_uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})



// Middleware 
app.use('/',(request,response,next)=>{
    const num = 1;
    if(num==1){
        next();
    }
    else{
        response.send(`Unauthorized`)
    }
})

app.get('/',(request,response)=>{
    response.send(`Hello World`)
})



// Adding data

app.get('/add',(request,response)=>{
    postModel.create(
        {name:"Qambar Ali",class:"12"},
        (error,data)=>{
            if(error){
                console.log(error.message);
            }
            else{
                console.log(data);
                response.send(`Data Added Successfully`)
            }
        })
})



// Find Data

app.get('/find',(request,response)=>{
    postModel.find(
        {name:"Qambar Ali"},
        (error,data)=>{
            if(error){
                console.log(error.message);
            }
            else{
                console.log(data);
                response.send(`Data Finded Successfully`)
            }
        })
})





// Delete One Data

app.get('/delete',(request,response)=>{
    postModel.deleteOne(
        {name:"Qambar Ali"},
        (error,data)=>{
            if(error){
                console.log(error.message);
            }
            else{
                console.log(data);
                response.send(`Data Finded Successfully`)
            }
        })
})



//Update Data


app.get('/update',(request,response)=>{
    postModel.findOneAndUpdate(
        {name:"Qambar Ali"},{name:"Ali"},
        (error,data)=>{
            if(error){
                console.log(error.message);
            }
            else{
                console.log(data);
                response.send(`Data Added Successfully`)
            }
        })
})


mongoose.connection.on('connected',()=>console.log(`Database connected`))
mongoose.connection.on('error',(error)=>console.log(`Mongoose Error ${error.message}`))


app.listen(port,()=>{
    console.log(`App running at localhost:${port}`);
})