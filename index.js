const express = require('express')
const conn = require('./db')
const ProductRoute = require('./routes/ProductRoute')
const app = express()

app.use(express.json())

app.use('/products',ProductRoute)

conn.sync().then(() => app.listen(3000)).catch(err => console.error(err))