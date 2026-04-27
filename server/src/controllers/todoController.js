const Todo = require("../models/Todo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to load todos" });
  }
};

const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Title is required" });
    }

    const todo = await Todo.create({
      title,
      description,
    });

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Failed to create todo" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Title is required" });
    }

    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Failed to update todo" });
  }
};

const toggleTodoDone = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.done = !todo.done;
    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Failed to update todo status" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete todo" });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  toggleTodoDone,
  deleteTodo,
};