const router = require('express').Router()
const PlayerStats = require('./player_stats_model.js')

router.get('/', async (req, res) => {
  const allPlayerStats = await PlayerStats.getAllPlayerStats()
  res.status(200).json()
})