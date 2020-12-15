const mysql = require("mysql");
const conf = require("./config.js");
var connection = null;

const connectionFunctions = {
  connect: () => {
    connection = mysql.createPool(conf);
  },
  save: (task) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO tasks SET ?", task, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  findAll: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM tasks", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  deleteById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM tasks WHERE id = ?",
        [id],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  findById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM tasks WHERE id = ?",
        [id],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  filter: (column, value) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM tasks WHERE ?? = ?",
        [column, value],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  sortTasks: (sort) => {
    function sorter(resolve, reject) {
      if (sort.order === "-") {
        sort.order = "DESC";
      } else {
        sort.order = "ASC";
      }
      connection.query(
        `SELECT * FROM tasks ORDER BY ${sort.by} ${sort.order}`,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    }
    return new Promise(sorter);
  },
};

module.exports = connectionFunctions;
