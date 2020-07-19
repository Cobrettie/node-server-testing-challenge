const db = require('../data/dbConfig.js')

async function addNewPlayerStats(player) {
  const [id] = await db('player_stats').insert(player)
  return getPlayerStatsById(id)
} 

function getAllPlayerStats() {
  return db('player_stats')
}

function getPlayerStatsById(id) {
  return db('player_stats').where({ id }).first()
}

module.exports = {
  addNewPlayerStats,
  getAllPlayerStats,
  getPlayerStatsById
}