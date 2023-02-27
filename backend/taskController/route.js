const express = require("express");
const router = express.Router();

const {
  newTask,
  getTask,
  deleteTask,
  updateTask,
} = require("./taskController");

router.route("/task/new").post(newTask);
router.route("/task").get(getTask);
router.route("/task/delete/:id").delete(deleteTask);
router.route("/task/update/:id").put(updateTask);

module.exports = router;
