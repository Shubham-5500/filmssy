import express from 'express';
import { protect, admin_only } from '../middleware/auth.js';
import { popularContent, userGrowth } from '../controllers/analyticsController.js';
const router = express.Router();
router.get('/popular', protect, admin_only, popularContent);
router.get('/growth', protect, admin_only, userGrowth);
export default router;
