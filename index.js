const Twitter = require('twitter');
const twitter = new Twitter({
  consumer_key: '30GGTW4feV1NEDknlHvtg2f8o',
  consumer_secret: 'iMLXTuBnTkrwaSNcfZOm1emaMTrygzyARPrKQXkL8mfSl9M3Rw',
  access_token_key: '1280910845246164994-SJSOGNrBpyBBe8xm2EqlbNySI5VtBR',
  access_token_secret: 'tCIv4dMarVdMhnj8VOhSsKdXmsSdVpwZCog6RqXqmf7v9'
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
let day = 1;

setInterval(() => {
    const now = new Date();
    if (now.getHours() === 9 && now.getMinutes() === 30) {
        twitter.post('statuses/update', {status: `Day ${day}: Has @ElonMusk followed me yet?`},  function(error, tweet, response) {
            if(error) throw error;
            console.log(tweet);  // Raw response object.
            day += 1;
          })
    }
}, 60 * 1000)

console.log(`App listening on port ${PORT}`)
});

// twitter.get('statuses/user_timeline', {screen_name: 'epic_qi'}, (err, data, resp) => {
//     if (!err) {
//         console.log("Verified account", data)
//     } else {
//         console.log("Error getting tweet", err)
//     }
// })



/**
 * API Key: IOdiYoeaHlwSaGusO9fvrPtVJ
 * 
 * API Secret key: Xmquqq5XbYXpNwfeSqIDw0gcAENIj9VnOila3eIibNhloIaCCw
 * 
 * Bearer token: AAAAAAAAAAAAAAAAAAAAAFFQFwEAAAAAyZbHegzrQoGB%2BrT3R9oZdOc90MI%3Db55tAuQ2ERE8PRgeYAKcdw07HtiW4K4GFvVpTGGAwsSojeOily
 * 
 * Access token: 1280910845246164994-xyUnpGKWeoO3FxQ0RsfIkje5LO6azK
 * 
 * Access token secret: 6x2TZgnuMUrxnhSGjbTNIIgB7KX8nxcCit2hNFs0Mf2Ve
 */