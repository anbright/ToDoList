const Task = require('../models/task');

exports.add_task = (req, res, next) => {
  const task = new Task({
    name: req.body.name,

  })

  task.save((err) => {
    if (err) { return next(err); }
    console.log('Added Task: ', req.body.name);
    res.status(200).send({'Task Added': req.body.name});
  })
}

exports.del_task = (req, res, next) => {
  const name = req.body.name;

  Task.findOneAndRemove({name: name}, (err, task) => {
    if (err) { return next(err) }
    if (task) {
      return res.status(200).send({'Task Deleted': req.body.name});
    } else {
      return res.status(404).send({'error': 'Task not found: '+ req.body.name})
    }
  })
}

exports.get_tasks = (req, res, next) => {
  Task.find({}, (err, data) => {
    if (err) { return next(err) }
    res.status(200).send(data);
  });
}

exports.update_task = (req, res, next) => {
  Task.findOneAndUpdate({name: req.body.name}, {name: req.body.name, completed: req.body.completed}, (err, result) => {
    if (err) {return next(err)}
    if (result) { return res.status(200).send({'success':'updated value'}); }
    return res.status(404).send({'error': 'Could not find value'})
  });
}
