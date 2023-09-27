import express from 'express';
import { signup } from '../controllers/auth.controller.js';
const router = express.Router();

router.post('/signup', signup);
router.post('/signup/:id', signup);

export default router;
