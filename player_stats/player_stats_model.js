const db = require('../data/dbConfig.js')

function getAllPlayerStats() {
  return db('player_stats')
}

module.exports = {
  getAllPlayerStats
}