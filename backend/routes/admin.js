import express from 'express';
import { protect, admin_only } from '../middleware/auth.js';
import Content from '../models/Content.js';
import { fetchMetadataFromTMDB } from '../services/tmdb.js';
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: 'uploads/temp/' });

router.post(
    '/upload',
    protect,
    admin_only,
    upload.fields([{ name: 'video' }, { name: 'thumbnail' }]),
    async (req, res) => {
        try {
            const { tmdbId, type } = req.body;
            const meta = await fetchMetadataFromTMDB(tmdbId);
            const videoFile = req.files.video?.[0]?.path;
            const thumbFile = req.files.thumbnail?.[0]?.path;

            const content = new Content({
                tmdbId: meta.id,
                title: meta.title || meta.name,
                description: meta.overview,
                releaseDate: meta.release_date || meta.first_air_date,
                type: type || (meta.first_air_date ? 'series' : 'movie'),
                genres: meta.genres.map((g) => g.name),
                videoUrl: videoFile,
                thumbnail: thumbFile,
                poster: meta.poster_path,
            });

            await content.save();
            res.status(201).json(content);
        } catch (err) {
            res.status(500).json({ message: 'Upload failed', error: err.message });
        }
    }
);

export default router;
