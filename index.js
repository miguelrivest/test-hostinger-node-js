import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import sqlite from 'node:sqlite'
import { DatabaseSync } from 'node:sqlite'
const database = new DatabaseSync('db/auth.db')

const app = express();

app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "Server is running successfully!" });
});

app.post('/', (req, res) => {
    let name = req.body.name || "Unknown";
    res.json({ message: `Hello ${name}! We received your post request!` })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});