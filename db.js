const configDB = require("./knexfile");
const environment = process.env.environment || "development";
const db = require("knex")(configDB[environment]);

module.exports = db;

// http://knexjs.org/#Installation-node
// req.query, req.params.id, req.body
// HTTP METHODS: PUT, DELETE
// knex migrate:latest
// knex migrate:latest --env production
// knex migrate:make migration_name
