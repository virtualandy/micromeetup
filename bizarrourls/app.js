const express = require('express')
const bodyParser = require('body-parser')
const hasha = require('hasha')

const { PORT = 3000, UP_STAGE = "development"} = process.env

const app = express()
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json()) // for parsing application/json
function logErrors (err, req, res, next) {
  console.error("logging errors")
  console.error(err.stack)
  next(err)
}

app.get('/', function(req, res){
  console.log("you're at the root")
  res.json({'message': 'hello denver microservices meetup!', 'stage': `${UP_STAGE}`})
})

app.get('/favicon.ico', ok)
app.get('/robots.txt', ok)

function ok(req, res) {
  res.status(200)
  res.end()
}

app.get('/:token', function(req, res) {
  const { token } = req.params
  console.log("you're looking for ", token);
  res.status(204)
  res.end()
})

app.post('/bizarro', function(req, res) {
  console.log("echoing", req.body)
  const { url } = req.body
  bToken = bizarroify(url) // turn a url into a (lengthy) token
  res.json({'bizarroToken':bToken})
})

function bizarroify(url) {
  if (url) {
    digest = hasha(url)
    console.log("turned ", url, " into ", digest)
    return digest
  } else {
    return hasha("https://worthlessidea.website")
  }
}

app.use(logErrors)
// catch errors and log them
app.use(function (err, req, res, next) {
  console.log('swallow errors')
  res.status(500).send('Something broke!')
})

console.log('listening on %s', PORT)
app.listen(PORT)