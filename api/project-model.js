const db = require("../data/db-config.js")

module.exports = {
    get,
    findResource,
    getById,
    add,
    addResource,
    findResourceByProjectId,
    addTask,
    findTask,
    update,
    remove

}


function get() {
    // get a list of project
    return db("project")
    // .join("task as t", "t.product_id", "p.id")
    // .join("resource as r", "r.product_id", "p.id")
    .select()
}
// .join("resource as r", "r.product_id", "p.id")
function findResource() {
  return db("resource")
          .select()
}
// get project by id
function getById(id) {
    return db("project")
            .where({ id })
            .first()            
}

    function findResourceByProjectId(id) {
        return db("resource as r")
            .select("*")
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
            .select("*")
            .where({ id })
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













