import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import contentRoutes from './routes/content.js';
import userRoutes from './routes/user.js';
import adminRoutes from './routes/admin.js';
import profileRoutes from './routes/profiles.js';
import subscriptionRoutes from './routes/subscription.js';
import reviewRoutes from './routes/reviews.js';
import episodeRoutes from './routes/episodes.js';
import analyticsRoutes from './routes/analytics.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/subscription', subscriptionRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/episodes', episodeRoutes);
app.use('/api/analytics', analyticsRoutes);

app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => res.send('Filmssy Backend Complete'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
