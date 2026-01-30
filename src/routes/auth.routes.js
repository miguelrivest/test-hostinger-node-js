import express from 'express';
import { getAuth, postAuth } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/', getAuth);
router.post('/', postAuth);

export default router;
