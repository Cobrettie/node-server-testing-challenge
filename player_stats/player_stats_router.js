const router = require('express').Router()
const PlayerStats = require('./player_stats_model.js')


// Create new player/player stats
router.post('/', async (req, res) => {
  try {
    const newPlayer = await PlayerStats.addNewPlayerStats(req.body)
    if (!newPlayer) {
      res.status(404).json({
        message: 'Invalid information'
      })
    }
    res.status(201).json(newPlayer)
  } catch(err) {
    console.log('Error: ', err)
  }
})


// Read all player stats
router.get('/', async (req, res) => {
  try {
    const allPlayerStats = await PlayerStats.getAllPlayerStats()
    res.status(200).json(allPlayerStats)
  } catch(err) {
    console.log('Error: ', err)
  }
})


// Read single player stats by id
router.get('/player/:id', async (req, res) => {
  try {
    const player = await PlayerStats.getPlayerStatsById(req.params.id)
    if (!player) {
      res.status(404).json({
        message: 'Player not found'
      })
    }
    res.status(200).json(player)
  } catch(err) {
    console.log('Error: ', err)
  }
})

module.exports = router