
require('dotenv').config(); 

const {TwitterApi} = require('twitter-api-v2');

const userDetails = new TwitterApi({
    appKey: `${process.env.APP_KEY}`,
    appSecret:`${process.env.APP_SECRET}`,
    accessSecret:`${process.env.ACCESS_SECRET}`,
    accessToken:`${process.env.ACCESS_TOKEN}`
})

const forwardDetails = userDetails.readWrite;


module.exports = forwardDetails