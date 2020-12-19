const mysql = require("mysql");
const conf = require("./config.js");
var connection = null;

const crudRepository = {
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
  sort: (by, order) => {
    function sorter(resolve, reject) {
      connection.query(
        `SELECT * FROM tasks ORDER BY ?? ${order}`,
        [by],
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

  filterSort: (column, value, by, order) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM tasks WHERE ?? = ? ORDER BY ?? ${order}`,
        [column, value, by],
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
};

module.exports = crudRepository;
