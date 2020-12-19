const express = require("express");
const app = express();
var cors = require("cors");
const tasks = require("./routes/tasks.js");
const crudRepository = require("./database/crudrepository.js");
app.use(cors());
app.use(express.json());
app.use("/tasks", tasks);

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  crudRepository.connect();
  console.log(`Listening on port ${server.address().port}`);
});
