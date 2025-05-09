import express from 'express';
import { protect } from '../middleware/auth.js';
import { subscribePlan, getSubscription } from '../controllers/subscriptionController.js';
const router = express.Router();
router.post('/', protect, subscribePlan);
router.get('/', protect, getSubscription);
export default router;
