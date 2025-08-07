import express from 'express';
import { 
  getDiagnosticInsights, 
  runDiseaseDetection, 
  getHealthRiskAssessment,
  processImageAnalysis
} from '../controllers/aiController.js';

const router = express.Router();

// AI-powered healthcare endpoints
router.post('/diagnostic-insights', getDiagnosticInsights);
router.post('/disease-detection', runDiseaseDetection);
router.post('/risk-assessment', getHealthRiskAssessment);
router.post('/image-analysis', processImageAnalysis);

export default router;