//require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require ('cors')

//added a port  
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(cors({origin: '*'}));

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(PORT, () => console.log('Server Started'))