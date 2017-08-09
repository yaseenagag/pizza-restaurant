const pgp = require('pg-promise')
const connectionString = "postgres://localhost:5432/pizza"
const db = pgp(connectionString)

