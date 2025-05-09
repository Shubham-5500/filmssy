import express from 'express';
import { protect } from '../middleware/auth.js';
import Review from '../models/Review.js';
const router = express.Router();
router.post('/', protect, async (req, res) => {
  const { content, rating, comment } = req.body;
  const rev = await Review.create({ user: req.user._id, content, rating, comment });
  res.json(rev);
});
router.get('/:contentId', async (req, res) => {
  const revs = await Review.find({ content: req.params.contentId }).populate('user','displayName');
  res.json(revs);
});
export default router;
