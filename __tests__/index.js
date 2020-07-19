const supertest = require('supertest')
const server = require('../index.js')
const db = require('../data/dbConfig.js')


// beforeEach(async () => {
//   // this function executes and clears out the table before each test
//   await db('player_stats').truncate();
// });

afterAll(async () => {
  await db.destroy()
})

// player_stats integration tests

describe('player stats integration tests', () => {
  // GET all player stats
  it('GET /playerstats', async () => {
    const res = await supertest(server).get('/playerstats')
      expect(res.statusCode).toBe(200)
  })

  // GET player stats by id
  it('GET /playerstats/player/:id', async () => {
    const res = await supertest(server).get('/playerstats/player/1')
      expect(res.statusCode).toBe(200)
  })

  // POST new player stats
  it('POST /playerstats', async () => {
    const res = await supertest(server)
      .post('/playerstats')
      .send({
        first_name: 'new guy',
        last_name: 'newfer',
        batting_average: 0.087,
        hit: 28,
        at_bat: 496,
        RBI: 8,
        single: 26,
        double: 0,
        triple: 0,
        homerun: 2
      })
    expect(res.statusCode).toBe(201)
  })
})
