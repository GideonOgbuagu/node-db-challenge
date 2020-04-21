
exports.up = function(knex) {
  return knex.schema
    .createTable("project", tbl => {
      tbl.increments()
      tbl.string("name", 255).notNullable()
      tbl.string("description", 255)
      tbl.boolean("completed").notNullable().defaultTo(false);
      
  })

    .createTable("resource", tbl => {
    tbl.increments()
    tbl.string("name", 255).notNullable()
    tbl.string("description")

})

    .createTable("project_resource", (tbl) => {
      tbl.increments();
      tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("project")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("resource_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resource")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  })

    .createTable("task", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable()
      tbl.string("description", 255).notNullable()
      tbl.string("notes", 255)
      tbl.boolean("completed").notNullable().defaultTo(false)
      tbl.integer('task_id').unsigned().notNullable().references('id').inTable('project').onDelete('CASCADE').onUpdate('CASCADE')


})
};

exports.down = function(knex) {
return knex.schema
    .dropTableIfExists("task")
    .dropTableIfExists("project_resource")
    .dropTableIfExists("resource")
    .dropTableIfExists("project");
};
