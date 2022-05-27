const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require('cors')


const connectDB =()=>{

mongoose.connect('mongodb+srv://abdulrehman:1hello234@cluster0.xjwjw.mongodb.net/ecommerce?retryWrites=true&w=majority')
        .then((data)=>{
            console.log(`MongoDB connected With Server ${data.connection.host}`)
        })
} 


PORT = 4000
connectDB();
app.use(cors())
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

const section = require('./routes/sectionRoute')
const user = require('./routes/userRoute')
const survey = require('./routes/surveyRoute')
const result = require('./routes/resultRoute')

app.use('/api/survay', section)
app.use('/api/user', user)
app.use('/api/section', survey)
app.use('/api/result', result)

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})