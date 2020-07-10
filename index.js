const Twitter = require('twitter');
const cron = require('node-cron')
const twitter = new Twitter({
  consumer_key: process.env.API_KEY, // Declared in heroku env, heroku config:get API_KEY
  consumer_secret: process.env.API_SECRET,
  access_token_key: process.env.ACCESS_KEY,
  access_token_secret: process.env.ACCESS_SECRET,
});

console.log("I got env vars ", process.env);

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/test', (req, res) => {
    res.json({
        message: "It works!"
    })
})
app.listen(PORT, () => {
    let day = 1;
    cron.schedule('18 9 * * *', () => {
        console.log("I am sending a tweet")
        twitter.post('statuses/update', {status: `Day ${day}: Has @ElonMusk followed me yet?`},  function(error, tweet, response) {
            if(error) throw error;
            console.log("I sent the tweet", tweet);  // Raw response object.
            day += 1;
        })
    })

    console.log(`App listening on port ${PORT}`)
});
