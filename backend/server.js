const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require('cors')


const connectDB =()=>{

mongoose.connect('')
        .then((data)=>{
            console.log(`MongoDB connected With Server ${data.connection.host}`)
        })
} 


PORT = 4000
connectDB();
app.use(cors({
    origin: 'http://localhost:3000',

    credentials: true
}))

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

// var axios = require('axios');
// var data = JSON.stringify({
//   "amount": 10,
//   "merchantInvoiceId": "ABC777",
//   "language": "en-US",
//   "currency": "USD",
//   "okUrl": "http://localhost:3000?payment=succes",
//   "notOkUrl": "http://localhost:3000?payment=error",
//   "confirmationUrl": "https://merchant.com/confirmation_url",
//   "merchantLogo": "https://merchant.com/image/logo.png"
// });

// var config = {
//   method: 'post',
//   url: 'http://apitest.p4f.com/1.0/wallet/process',
//   headers: { 
//     'merchantId': '3305', 
//     'hash': '70740D065D4286009C7D86D71FC1343D9986C60A924F7424D74D8A70D76CD71A', 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

