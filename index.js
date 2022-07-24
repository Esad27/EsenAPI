const express = require('express');

const port = process.env.PORT || 3000;
const firestore = require('./FirebaseConfig')
const FirebaseService = require('./src/FirebaseService')
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit')


const app = express();
//limit
app.use(helmet());
app.use(compression());
app.use(limiter);

//limeter






/*
const port = process.env.PORT || port;
const www = process.env.WWW || './';
app.use(express.static(www));
console.log(`serving ${www}`);*/
app.use(express.json());

const datalist = [];


const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})



app.get('/data/:sa', (req, res) => {
    //res.sendFile(`index.html`, { root: www });
    res.status(200).send(req.params.sa);

});

app.post('/data', (req, res) => {
    let data = req.body;
    datalist.push(data);
    res.status(201).send(data);
    return;
    //curl -X POST http://localhost:3000/data -H "Content-Type: application/json" -d "{\"sa\":\"As\"}"

});
app.listen(port, () => {

    console.log("server is running", port);


});
/* ayrı yerler yapıcaksın tabi önce hesap kitao yapıcan ona göre hareket edicen ;)  sekmeler sana yardımcı olur haberin olsun tmm dırr kapa :)*/