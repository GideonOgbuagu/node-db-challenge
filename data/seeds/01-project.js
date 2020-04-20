
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'Database Project', description: 'This is a databse seed', completed: false},
        {name: 'API Project', description: 'This is a api seed', completed: false},
        {name: 'NodeJS Project', description: 'This is a Nodejs seed', completed: false},
      ]);
    });
};
