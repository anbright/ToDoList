const TasksController = require('./controllers/tasks');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index.ejs', {});
  });

  app.get('/tasks', TasksController.get_tasks)
  app.post('/tasks', TasksController.add_task);
  app.delete('/tasks', TasksController.del_task);
  app.put('/tasks', TasksController.update_task);
}
