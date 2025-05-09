import express from 'express';
import { protect } from '../middleware/auth.js';
import { createProfile, getProfiles } from '../controllers/profileController.js';
const router = express.Router();
router.post('/', protect, createProfile);
router.get('/', protect, getProfiles);
export default router;
