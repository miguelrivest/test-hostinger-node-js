import { DatabaseSync } from 'node:sqlite'
import bcrypt from 'bcrypt'
const database = new DatabaseSync('db/auth.db')

const query = database.prepare("SELECT * FROM user WHERE username = 'admin'");

let user = query.get()

console.log(`Testing password: ${(await bcrypt.compare("Testing1234!", user.password)) ? "PASSED" : "FAILED"}`)