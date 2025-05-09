import mongoose from 'mongoose';
const wpSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: { type: mongoose.Schema.Types.ObjectId, ref: 'Content' },
  progress: Number,
  updatedAt: { type: Date, default: Date.now }
});
export default mongoose.model('WatchProgress', wpSchema);
