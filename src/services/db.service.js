import { DatabaseSync } from 'node:sqlite';

const database = new DatabaseSync('db/auth.db');

export default database;
