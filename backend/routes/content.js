import express from 'express';
import Content from '../models/Content.js';

const router = express.Router();

// Get all content (public)
router.get('/', async (req, res) => {
    try {
        const all = await Content.find({});
        res.json(all);
    } catch (err) {
        res.status(500).json({ message: 'Failed to load content' });
    }
});

// Get specific content by ID
router.get('/:id', async (req, res) => {
    try {
        const content = await Content.findById(req.params.id);
        if (!content) return res.status(404).json({ message: 'Not found' });
        res.json(content);
    } catch (err) {
        res.status(500).json({ message: 'Error loading content' });
    }
});

export default router;
