const express = require('express')
const cors = require('cors')

// const playerStatsRouter = require('./playerStats/playerStatsRouter')

const server = express()
const PORT = process.env.PORT || 5000

server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
  res.json({
    message: 'Welcome to server'
  })
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

if(!module.parent) {
  server.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`)
  })
}


module.exports = server