const express = require('express');
// const db = require("../db-config.js")

const Project = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Project.get()
  .then(project => {
    res.json(project);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Project.getById(id)
  .then(project => {
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get project' });
  });
});


router.post('/', (req, res) => {
    const projectData = req.body;
  
    Project.add(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });

// resource routes

router.get('/:id/resources', (req, res) => {
  const { id } = req.params;

  Project.findResource(id)
  .then(resource => {
    if (resource.length) {
      res.json(resource);
    } else {
      res.status(404).json({ message: 'Could not find resources for given project' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});


router.post('/:id/resources', (req, res) => {
  const resourceData = req.body;
  const { id } = req.params; 

  Project.getById(id)
  .then(resource => {
    if (resource) {
      Project.addResource(resourceData, id)
      .then(resource => {
        res.status(201).json(resource);
      })
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource' });
  });
});

// task routes

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
  
    Project.findTask(id)
    .then(task => {
      if (task.length) {
        res.json(task);
      } else {
        res.status(404).json({ message: 'Could not find tasks for given project' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });
  
  
  router.post('/:id/tasks', (req, res) => {
    const taskData = req.body;
    const { id } = req.params; 
  
    Project.getById(id)
    .then(resource => {
      if (resource) {
        Schemes.addTask(taskData, id)
        .then(resource => {
          res.status(201).json(resource);
        })
      } else {
        res.status(404).json({ message: 'Could not find tasks with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });


router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Project.getById(id)
  .then(project => {
    if (project) {
      Project.update(changes, id)
      .then(updatedProject => {
        res.json(updatedProject);
      });
    } else {
      res.status(404).json({ message: 'Could not find project with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update project' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Project.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find project with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete project' });
  });


router.delete('/', (req, res) => {
    // const { id } = req.params;
    db("project")
    .select()
    .del()
  .then(() => {
    res.status(204).end();
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete projects' });
  });

});
 
});




module.exports = router;