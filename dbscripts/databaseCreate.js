import { DatabaseSync } from 'node:sqlite';
import bcrypt from 'bcrypt'
const database = new DatabaseSync('db/auth.db');

// Execute SQL statements from strings.
database.exec(`
  CREATE TABLE user(
    user_id INTEGER PRIMARY KEY,
    username TEXT UNIQUE,
    password TEXT
  ) STRICT
`);
// Create a prepared statement to insert data into the database.
const insert = database.prepare('INSERT INTO user (username, password) VALUES (?, ?)');
// Execute the prepared statement with bound values.
insert.run('admin', `${await bcrypt.hash('Testing1234!', 10)}`);
// Create a prepared statement to read data from the database.
const query = database.prepare('SELECT * FROM user');
// Execute the prepared statement and log the result set.
console.log(query.all());
// Prints: [ { key: 1, value: 'hello' }, { key: 2, value: 'world' } ]