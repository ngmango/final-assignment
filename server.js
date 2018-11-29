const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
const cheerio = require('cheerio');
const request = require('request')


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());


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