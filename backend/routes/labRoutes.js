import express from 'express';
import { 
  analyzeLabResults, 
  getLabHistory, 
  uploadLabData,
  getPredictiveAnalytics
} from '../controllers/labController.js';

const router = express.Router();

// Lab analysis endpoints
router.post('/analyze', analyzeLabResults);
router.post('/upload', uploadLabData);
router.get('/history/:patientId', getLabHistory);
router.get('/analytics/:patientId', getPredictiveAnalytics);

export default router;