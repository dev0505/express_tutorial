const express = require('express');
const html = require('html');
const axios = require('axios');
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index.html')
})

app.get('/get-stock', (req, res) => {


      console.log(axios.get('https://finance.naver.com/api/sise/etfItemList.nhn').then((data)=> {
        console.log(data.data.result)
      res.send(data.data.result)
      }
      )
      
      )
      

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})