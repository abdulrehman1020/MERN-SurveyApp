const express = require('express')
const app = express();
const mongoose = require('mongoose');


const connectDB =()=>{

mongoose.connect('mongodb+srv://abdulrehman:1hello234@cluster0.xjwjw.mongodb.net/ecommerce?retryWrites=true&w=majority')
        .then((data)=>{
            console.log(`MongoDB connected With Server ${data.connection.host}`)
        })
} 


PORT = 3000
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const section = require('./routes/sectionRoute')
const user = require('./routes/userRoute')

app.use('/api/survay', section)
app.use('/api/user', user)

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})