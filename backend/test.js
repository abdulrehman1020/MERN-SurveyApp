var axios = require('axios');
var crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

const merchantId= "3305";
const amount="10";
const merchantInvoiceId= uuidv4();
const merchantSecret= "X7cnXUk";

const seed = `${merchantId}${amount}00${merchantInvoiceId}${merchantSecret}`
console.log(seed);
console.log(merchantInvoiceId)
//creating hmac object 
var hmac = crypto.createHmac('sha256', '7638772s');
//passing the data to be hashed
data = hmac.update(seed);
//Creating the hmac in the required format
gen_hmac= data.digest('hex');
//Printing the output on the console
console.log("hmac : " + gen_hmac);

const hash = `${gen_hmac}`;
console.log(hash)

var data = JSON.stringify({
  "amount": amount,
  "merchantInvoiceId": merchantInvoiceId,
  "language": "en-US",
  "currency": "USD",
  "okUrl": "http://localhost:3000?payment=succes",
  "notOkUrl": "http://localhost:3000?payment=error",
  "confirmationUrl": "https://merchant.com/confirmation_url",
  "merchantLogo": "https://merchant.com/image/logo.png"
});

var config = {
  method: 'POST',
  url: 'http://test.p4f.com/api/1.0/go/process/',
  headers: { 
    // 'merchantId': '3305',
    'merchantId': merchantId, 
    'hash': hash, 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});






//Loading the crypto module in node.js





