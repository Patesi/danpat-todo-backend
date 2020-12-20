const express = require("express");
const tasks = express.Router();
const crudRepository = require("../database/crudrepository.js");

/*tasks.get("/", async (req, res) => {
  try {
    const result = await crudRepository.findAll();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(404).end();
  }
});*/

tasks.get("/:taskID([0-9]+)", async (req, res) => {
  try {
    const result = await crudRepository.findById(req.params.taskID);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(404).end();
  }
});

tasks.get("/", async (req, res) => {
  let result;
  let order;
  // get query keys and values
  const keys = Object.keys(req.query);
  const values = Object.values(req.query);

  //set index based on amount of queries
  if (keys.length === 1) {
    var index = 0;
  } else if (keys.length === 2) {
    index = 1;
  }

  //only check for order when queries present
  if (keys.length !== 0) {
    if (values[index].slice(0, 1) === "-") {
      order = "DESC";
    } else {
      order = "ASC";
    }
  }

  try {
    //filtering
    if (keys.length === 1 && keys[0] !== "search" && keys[0] !== "sort") {
      result = await crudRepository.filter(keys[0], values[0]);
    }
    //sorting
    else if (keys.length === 1 && keys[0] === "sort") {
      result = await crudRepository.sort(values[index].slice(1), order);
    }
    //filtering + sorting
    else if (keys.length === 2 && keys[0] !== "search") {
      result = await crudRepository.filterSort(
        keys[0],
        values[0],
        values[index].slice(1),
        order
      );
    }
    //search
    else if (keys.length === 2 && keys[0] === "search") {
      result = await crudRepository.search(
        `%${values[0]}%`,
        values[index].slice(1),
        order
      );
    }
    //view all
    else {
      result = await crudRepository.findAll();
    }
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(404).end();
  }
});

/*tasks.get("/sort=:order([+-]):by(\\w+)", async (req, res) => {
  let order = "";
  if (req.params.order === "-") {
    order = "DESC";
  } else {
    order = "ASC";
  }
  const sort = {
    order: order,
    by: req.params.by,
  };
  try {
    const data = await crudRepository.sortTasks(sort);
    res.send(data);
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
});*/

tasks.delete("/:taskID([0-9]+)", async (req, res) => {
  try {
    await crudRepository.deleteById(req.params.taskID);
    res.status(204).end();
  } catch (err) {
    if (err === "id not found") {
      res.status(404).send(err).end();
    } else {
      res.status(406).end();
    }
  }
});

tasks.put("/:taskID([0-9]+)", async (req, res) => {
  try {
    await crudRepository.updateById(req.params.taskID, req.body);
    res.status(202).send(req.body);
  } catch (err) {
    if (err === "id not found or data not changed") {
      res.status(404).send(err).end();
    } else {
      res.status(406).end();
    }
  }
});

tasks.post("/", async (req, res) => {
  try {
    await crudRepository.save(req.body);
    res.status(201).send(req.body);
  } catch (err) {
    res.status(406).end();
  }
});

module.exports = tasks;
