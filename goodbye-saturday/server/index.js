
const express = require('express')
const bodyParser = require('body-parser')
const rs = require('./controllers/recentSearches')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const baseUrl = '/api/places/'

app.get(baseUrl, rs.read )
app.post(baseUrl, rs.create)
app.delete(baseUrl, rs.delete)

app.listen(3001, ()=> {console.log(`Server is running on port 3001`)})