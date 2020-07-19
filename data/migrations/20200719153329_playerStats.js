exports.up = async function(knex) {
  await knex.schema.createTable("player stats", table => {
    table.increments() // creates an auto incrementing field named 'id'
    table.integer('batting average').notNullable()
    table.integer('hit').notNullable()
    table.integer('at bat').notNullable()
    table.integer('RBI').notNullable()
    table.integer('single').notNullable()
    table.integer('double').notNullable()
    table.integer('triple').notNullable()
    table.integer('homerun').notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('player stats')
};
