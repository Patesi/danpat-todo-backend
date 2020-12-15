const express = require("express");
const tasks = express.Router();
const crudRepository = require("../database/crudrepository.js");

tasks.get("/", async (req, res) => {
  try {
    const result = await crudRepository.findAll();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(404).end();
  }
});

tasks.get("/:taskID([0-9]+)", async (req, res) => {
  try {
    const result = await crudRepository.findById(req.params.taskID);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(404).end();
  }
});

tasks.get(
  "/:taskColumn(\\w+)=:taskValue([a-z]+|[1-5]{1})",
  async (req, res) => {
    try {
      const result = await crudRepository.filter(
        req.params.taskColumn,
        req.params.taskValue
      );
      res.send(result);
    } catch (err) {
      console.log(err);
      res.status(404).end();
    }
  }
);

tasks.get(
  "/sort=:([+-]?):by(title)", // |category|due_date|priority) ?
  async (req, res) => {
    const sort = {
      order: String(req.params.order),
      by: String(req.params.by),
    };
    try {
      const data = await connectionFunctions.sortTasks(sort);
      res.send(data);
    } catch (err) {
      res.status(500).end();
    }
  }
);

tasks.delete("/:taskID([0-9]+)", async (req, res) => {
  try {
    await crudRepository.deleteById(req.params.taskID);
    res.status(204).end();
  } catch (err) {
    res.status(404).end();
  }
});

tasks.post("/", async (req, res) => {
  try {
    await crudRepository.save(req.body);
    res.status(201).send(req.body);
  } catch (err) {
    res.status(406).end();
    console.log(err);
  }
});

module.exports = tasks;
