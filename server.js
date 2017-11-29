const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const artists = require('./models/artists.js');
const users = require('./models/user.js');
const PORT = 8080;
const cheerio = require('cheerio');
const request = require('request')

// `http://api.songkick.com/api/3.0/search/artists.xml?query={search_query}&apikey={your_api_key}`


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());



const MONGO_CONNECTION_STRING = 'mongodb://localhost:27017/data/db'

mongoose.connect(MONGO_CONNECTION_STRING);

const connection = mongoose.connection;

connection.on("open", ()=> {
    console.log("we are connected to mongo ^_^");
    app.listen(PORT, ()=>{
        console.log('we are listening on', 8080);
    })
})


app.get('/scraperotatethis', (req, res) => {
    request('http://www.rotate.com/tickets/', (err, resp, body) => {
        let meta = [];    
        
        if(!err) {
            const $ = cheerio.load(body);
            let links = $('tr.gigpress-row');

            links.each(function (index, link) {

                var artist = $(this).children('.gigpress-artist').text();
                var venue = $(this).children('.gigpress-venue').text();
                var date = $(this).children('.gigpress-date').text();

                meta.push({
                    artist:artist,
                    venue:venue,
                    date:date,
                })
            })
        // console.log(meta[0])
        }
        res.json(meta);
    })
      
})