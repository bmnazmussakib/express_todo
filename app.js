const express = require('express')
const app = express()
const router = require('./src/routes/api')


// Security Middleware Import
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const mongoSanitize = require('express-mongo-sanitize')
const helmet = require('helmet')
const hpp = require('hpp')


// Security Middleware Implementation
// app.use(cors())
// app.use(rateLimit())
// app.use(helmet())
// app.use(hpp())
// app.use(mongoSanitize())


// Request Rate Limiting
// const limiter = rateLimit({
// 	windowMs: 15 * 60 * 1000, // 15 minutes
// 	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
// 	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
// 	// store: ... , // Redis, Memcached, etc. See below.
// })

// // Apply the rate limiting middleware to all requests.
// app.use(limiter)



app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/api/v1', router)


module.exports = app;