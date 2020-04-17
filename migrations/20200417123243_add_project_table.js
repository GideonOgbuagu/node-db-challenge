
exports.up = function(knex) {
  return knex.schema
    .createTable(("project"), tbl => {
      tbl.string("id", 255).primary()
      tbl.string("name", 255).notNullable()
      tbl.string("description", 255)
      tbl.boolean("completed").notNullable().defaultTo(false);
  })

    .createTable(("resource"), tbl => {
    tbl.string("id", 255).primary()
    tbl.string("name", 255).notNullable()
    tbl.string("description")
    tbl.integer("project_id").references("id").inTable("project");

    tbl.unique("project_id")
})

    .createTable(("task"), tbl => {
    tbl.string("id", 255).primary()
    tbl.string("name", 255).notNullable()
    tbl.string("description", 255).notNullable()
    tbl.string("notes", 255)
    tbl.boolean("completed").notNullable().defaultTo(false)
    tbl.integer("project_id").references("id").inTable("project");

    tbl.unique("project_id")
})
};

exports.down = function(knex) {
return knex.schema
    .dropTableIfExists("project")
    .dropTableIfExists("resource")
    .dropTableIfExists("task");
  
};
