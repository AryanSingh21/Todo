const Task = require("../model/tasks");

//add new task
exports.newTask = async (req, res, next) => {
  const task = await Task.create({
    task: req.body.task,
  });

  res.status(201).json({
    success: true,
    task,
  });
};

//get all task

exports.getTask = async (req, res, next) => {
  const task = await Task.find({});

  res.status(201).json({
    success: true,
    task,
  });
};

//delete a task

exports.deleteTask = async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(500).json({
      success: false,
      message: "Task not found",
    });
  }

  await task.remove();

  res.status(200).json({
    success: true,
    message: "Task deleted",
  });
};

//update task
exports.updateTask = async (req, res, next) => {
  let task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(500).json({
      success: false,
      message: "Task not found",
    });
  }

  task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    task,
  });
};
