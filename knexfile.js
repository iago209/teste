// Update with your config settings.
require("dotenv").config();

module.exports = {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./dev.sqlite3"
		},
		useNullAsDefault: true
	},

	staging: {
		client: "postgresql",
		connection: {
			database: "my_db",
			user: "username",
			password: "password",
			host: "127.0.0.1",
			port: 5432
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: "knex_migrations"
		}
	},

	production: {
		client: process.env.DB_CLIENT,
		connection: {
			database: process.env.DB_DATABASE,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			host: process.env.DB_HOST,
			port: process.env.DB_PORT
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: "knex_migrations"
		}
	}
};
