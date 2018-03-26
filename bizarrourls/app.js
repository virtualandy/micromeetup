const express = require('express')
const bodyParser = require('body-parser')
const hasha = require('hasha')
const loki = require('lokijs')

let db = new loki('bizarro.db')
let urls = db.addCollection('urls', { indices: ['token'] });

const { PORT = 3000, UP_STAGE = "development"} = process.env

const app = express()
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json()) // for parsing application/json
function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}

app.get('/', function(req, res){
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
  var results = urls.find({'token': token})
  if (results.length > 0) {
    result = results[0]
    res.json({'result': {'url': result.url}})
  } else {
    res.json({'result': {'message': `Did not find a bizarro url for ${token}`}})
  }
})

app.post('/bizarro', function(req, res) {
  const { url } = req.body
  bToken = bizarroify(url) // turn a url into a (lengthy) token
  var results = urls.find({'token': bToken})
  if (results.length > 0) {
    result = results[0]
    res.json({'bizarroToken': result.token})
  } else {
    let tempUrl = urls.insert({token: bToken, url: url})
    res.json({'bizarroToken':bToken})
  }
})

function bizarroify(url) {
  if (url) {
    digest = hasha(url)
    return digest
  } else {
    return hasha("https://worthlessidea.website")
  }
}

app.use(logErrors)
// catch errors and log them
app.use(function (err, req, res, next) {
  res.status(500).send('Something broke!')
})

console.log('listening on %s', PORT)
app.listen(PORT)