import express from 'express';
import { protect } from '../middleware/auth.js';
import { addEpisode, getEpisodes } from '../controllers/episodeController.js';
const router = express.Router();
router.post('/', protect, addEpisode);
router.get('/', protect, getEpisodes);
export default router;
