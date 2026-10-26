const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')

const app = express()
app.set('json spaces', 2);
app.use(cors())
app.use(logger('combined'))
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '20mb' }));
app.use(cookieParser())



const AdminRouter = require('../modules/admin/admin')



 app.use('/v1/',  AdminRouter)



 module.exports = app