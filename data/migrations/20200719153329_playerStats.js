exports.up = async function(knex) {
  await knex.schema.createTable("player_stats", table => {
    table.increments() // creates an auto incrementing field named 'id'
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.integer('batting_average').notNullable()
    table.integer('hit').notNullable()
    table.integer('at_bat').notNullable()
    table.integer('RBI').notNullable()
    table.integer('single').notNullable()
    table.integer('double').notNullable()
    table.integer('triple').notNullable()
    table.integer('homerun').notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('player_stats')
};
