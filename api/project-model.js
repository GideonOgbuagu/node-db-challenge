const db = require("../db-config.js")

module.exports = {
    get,
    getById,
    add,
    addResource,
    findResource,
    addTask,
    findTask,
    update,
    remove

}


function get() {
    // get a list of project
    return db("project")
    .select()
}
// .join("resource as r", "r.product_id", "p.id")

// get project by id
function getById(id) {
    return db("project")
            .where({ id })
            .first()            
}

    function findResource(id) {
        return db("resource as r")
            .join("project as p", "p.id", "r.product_id")
            .select()
            .where({ id })
    }
    function add(project){
        return db("project")
          .insert(project, "id")
          .then(([id]) => {
            return getById(id);
          });
      }
    
    function addResource(resource) {
        return db("resource")
        .insert(resource, "id")
        .then(([id]) => {
            console.log(id)
            return getById(id);
          });

    }

    function addTask(task) {
        return db("task")
        .insert(task, "id")
        .then(([id]) => {
          return getById(id);
        });
    }

    function findTask(id) {
        return db("task")
        .insert(task, "id")
        .then(([id]) => {
          return getById(id);
        });
    }


    function update(changes, id) {
        return db("project")
          .where({ id })
          .update(changes)
          .then(() => {
            return findById(id);
          });
      }
    function remove(id) {
        return db("project")
            .where({ id })
            .del()

    }













