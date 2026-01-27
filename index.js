import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "Server is running successfully!" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});