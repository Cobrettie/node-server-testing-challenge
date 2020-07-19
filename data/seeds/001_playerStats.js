
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('player_stats').del()
    .then(function () {
      // Inserts seed entries
      return knex('player_stats').insert([
        {
          id: 1,
          batting_average: 0.500,
          hit: 475,
          at_bat: 950,
          RBI: 148,
          single: 35,
          double: 80,
          triple: 113,
          homerun: 247
        },
        {
          id: 2,
          batting_average: 0.300,
          hit: 300,
          at_bat: 900,
          RBI: 97,
          single: 35,
          double: 183,
          triple: 18,
          homerun: 64
        }
      ]);
    });
};
