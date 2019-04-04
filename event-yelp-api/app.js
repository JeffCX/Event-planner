const yelp = require('yelp-fusion');
const express = require('express')
const path = require("path")
const bodyParser = require("body-parser")
var cors = require('cors')
const PORT = process.env.PORT || 8000


const client = yelp.client(process.env.key);
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

app.get("/getEvents",(req,res)=>{
  var headers = req.headers.authorization
  if(headers!=="key"){
    return res.send({
      error:"400"
    })
  }else{
    client.eventSearch({
      limit:20,
      longitude:-73.9815,
      latitude:40.7265,
      radius:500,
      sort_on:"time_start"
    }).then(response => {
      return res.send({
        data:response.jsonBody.events
      })
    }).catch(e => {
      return res.send({
        error:e
      })
    })
  }
})

app.listen(PORT,()=>{
  console.log(`Listening on ${ PORT }`)
})







