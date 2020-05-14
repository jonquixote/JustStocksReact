const express = require("express");
var cors = require('cors')
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
const yahooFinance = require('yahoo-finance')
const path = require('path')

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/stock_data/:ticker', (req, res) => {
  const today = new Date()
  let from = `${today.getFullYear() - 1}-${today.getMonth()}-${today.getDay()}`
  let to = `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}` 

  console.log('from', from)
  console.log('to', to)
  yahooFinance.historical({ 
    symbol: req.params.ticker,
    from: from,
    to: today,
    period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
  }, (err, success) => {
    if(err != null) {
      return res.status(400).send({ error: err })
    }

    return res.status(200).send(success)
  });
})

app.get('/stock_quote/:ticker', (req, res) => {
  console.log('fetching quote: ', req.params.ticker)
  yahooFinance.quote({
    symbol: req.params.ticker,
    modules: ['price']
  }, (err, success) => {
    if(err != null) {
      console.log('error', err)
      return res.status(400).send({ error: err })
    }

    console.log('success', success)
    return res.status(200).send(success)
  })
})

app.get('/wsb/:ticker', (req, res) => {
  console.log('fetching wsb data for:', req.params.ticker)
  return res.status(200).send({})
})

app.get('/wsbFeed', async (_, res) => {
  console.log('fetching wsb data')
  let resp = await wsb.wsbTopPostComments()
  console.log('wsb data fetch successful')
  return res.status(200).send(resp)
})

const port = process.env.PORT || 5000
console.log(`listening on port ${port}`)
app.listen(port, "0.0.0.0")