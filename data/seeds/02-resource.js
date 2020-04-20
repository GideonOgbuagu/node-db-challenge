
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'Computer', description: 'Needed for the project 1'},
        {name: 'Printer', description: 'Needed in the project 2'},
        {name: 'Wifi', description: 'Needed for the project 3'},
      ]);
    });
};
