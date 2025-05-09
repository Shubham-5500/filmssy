import express from 'express';
const router = express.Router();

// Test route to verify auth is active
router.get('/status', (req, res) => {
    res.json({ message: 'Auth route active — Firebase handles login client-side' });
});

export default router;
