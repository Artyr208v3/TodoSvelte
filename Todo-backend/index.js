import express from "express";
import { getTodos, createTask, changeTask, deleteTask } from "./db.js";

const PORT = 3000;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Можно указать конкретный источник
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});


app.get("/task", async (req, res) => {
  const todos = await getTodos();
  res.send(todos.rows);
});

app.post("/task", async (req, res) => {
  const data = req.body;
  try {
    await createTask(data.task_text, data.checked);
    res.send("Todo создан");
  } catch (err) {
    console.log(err);
  }
});

app.put("/task", async (req, res) => {
  const data = req.body;
  const updateData = await changeTask(data.id, data.checked);
  res.send(updateData);
});

app.delete("/task/:id", async (req, res) => {
  const updateData = await deleteTask(req.params.id);
  res.send(updateData);
});

app.listen(PORT, () => {
  console.log(`listening port ${PORT}`);
});
