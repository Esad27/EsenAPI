const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
/*
const port = process.env.PORT || port;
const www = process.env.WWW || './';
app.use(express.static(www));
console.log(`serving ${www}`);*/
app.use(express.json());

const datalist = [];

 var saniye = 0, dakika = 0, saat = 0;
  function bak()
  {
    if(saniye < 59) saniye = saniye + 1;
    else
    {
      saniye = 0; 
      if(dakika < 59) dakika = dakika + 1;
      else{dakika = 0; saat = saat + 1;}
    }
    $("#sure").html(saat + " : " + dakika + " : " + saniye);
  }
  $(document).ready(function(){
    $("#sure").html("0 : 0 : 0");
    setInterval(bak, 1000);
  });

app.get('/data', (req, res) => {
    //res.sendFile(`index.html`, { root: www });
    res.status(200).send(datalist);

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
