// db.js
const knex = require("knex")({
    client: "sqlite3",
    connection: {
      filename: "./hello.sqlite"
    },
    useNullAsDefault: true
  });
  module.exports = knex;