import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import logger from './src/utils/logger.js';
import authRoutes from './src/routes/auth.routes.js';
import postRoutes from './src/routes/post.routes.js';
import rootRoutes from './src/routes/root.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/post', postRoutes);
app.use('/', rootRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`Server is running on port: ${PORT}`);
});
