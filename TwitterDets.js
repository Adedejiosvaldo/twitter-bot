

const {TwitterApi} = require('twitter-api-v2');

const userDetails = new TwitterApi({
    appKey:'BZ0sGrNnHAUnG6ZAqEeE4zBGz',
    appSecret:'2FsVXbq7oTJYuPqBKqoPxSIcp5xJgjBBMo5eKXf8FFQoZN0aHM',
    accessSecret:'jiZVi6KDnpULajt7uQzy1UixAhTxhjkoAiD2xTFG6sOcV',
    accessToken:'1555571309421232129-RBAcfroyixcdGoBPpludEISi3RBZFe'
})

const forwardDetails = userDetails.readWrite;


module.exports = forwardDetails