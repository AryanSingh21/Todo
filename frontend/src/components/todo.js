import React, { useEffect, useState } from "react";
import axios from "axios";
import * as d3 from "d3";
// import { redirect, useNavigate } from "react-router-dom";

const Todo = () => {
  const [data, setData] = useState([]);
  const [task, setTask] = useState([]);
  const [active, setActive] = useState(false);
  const [selectedTask, setSelectedTask] = useState([]);

  useEffect(() => {
    axios.get("/api/v2/task").then((res) => {
      setData(res.data.task);
    });
  }, []);

  var input = d3.select("input");
  var preview = d3.select(".preview");

  //axios calls

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (task.length === 0) {
    } else {
      axios.post("/api/v2/task/new", { task }, config);
      window.location.reload();
    }
  };
  const deletetask = (id) => {
    axios.delete(`/api/v2/task/delete/${id}`);
    console.log("Task Delete");
    window.location.reload();
  };

  //preview section

  d3.select(".remove").on("click", function () {
    d3.selectAll(".note").remove();
  });

  input.on("input", function (e) {
    var val = e.target.value;
    setPreview(val);
  });

  function setPreview(val) {
    preview.classed("hide", val === "").text(val);
  }
  return (
    <div className="box">
      <h1>My Notes.</h1>
      <p>(click on the task to stike out :|)</p>
      {data.map((task) => (
        <>
          <div id="notes">
            <button
              key={task._id}
              id="deleteButton"
              onClick={() => {
                deletetask(task._id);
              }}
            >
              -
            </button>
            <p
              onClick={() => {
                setActive(active);
                setSelectedTask((s) => [...s, task._id]);
                console.log(selectedTask);
                console.log(task._id);
              }}
              className={
                !active && selectedTask.includes(task._id)
                  ? "note isChecked"
                  : "note"
              }
              key={task.task}
            >
              {task.task}
            </p>
          </div>
        </>
      ))}
      <div>
        <p className="preview hide"></p>
      </div>
      <form id="new-note">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" onClick={submitHandler}>
          +
        </button>
      </form>
    </div>
  );
};

export default Todo;
