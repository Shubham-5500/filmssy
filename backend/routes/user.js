import express from 'express';
import { protect } from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();

router.get('/me', protect, (req, res) => {
    res.json(req.user);
});

router.post('/watchlist', protect, async (req, res) => {
    const { contentId } = req.body;
    if (!req.user.watchlist.includes(contentId)) {
        req.user.watchlist.push(contentId);
        await req.user.save();
    }
    res.json({ message: 'Added to watchlist' });
});

router.get('/watchlist', protect, async (req, res) => {
    await req.user.populate('watchlist');
    res.json(req.user.watchlist);
});

router.post('/history', protect, async (req, res) => {
    const { contentId, progress } = req.body;
    const existing = req.user.watchHistory.find(
        (item) => item.content.toString() === contentId
    );
    if (existing) {
        existing.progress = progress;
        existing.watchedAt = new Date();
    } else {
        req.user.watchHistory.push({ content: contentId, progress });
    }
    await req.user.save();
    res.json({ message: 'History updated' });
});

export default router;
