require('dotenv').config(); 

const userDetails = require('./TwitterDets.js');
const fetch = require('node-fetch');
const cronJob = require('cron').CronJob;

const tweetFunction = async () => {
    const requestForRandomFact = await fetch (`https://api.api-ninjas.com/v1/facts?limit=1`,
      {
        method: 'GET',
        headers: {
          'X-Api-Key' : `${process.env.API_KEY}`
        }
    }
    )
  let Facts = await requestForRandomFact.json()
  const { fact } = Facts[0]

    if (fact.length >= 280 && fact === fact) {
      return
      
    } else {
      try {
          await userDetails.v1.tweet(fact)
        }
        catch (error) {
          console.log(error)
        }
    }
}

const twitterSchedule = new cronJob ('*/30 * * * *', ()=>{
  tweetFunction()
})

twitterSchedule.start()