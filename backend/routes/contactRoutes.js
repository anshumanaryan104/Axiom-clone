import express from 'express';
import { submitContactForm, getDemoAccess } from '../controllers/contactController.js';

const router = express.Router();

// Contact and demo endpoints
router.post('/submit', submitContactForm);
router.post('/demo', getDemoAccess);

export default router;