import mongoose from 'mongoose';
const epSchema = new mongoose.Schema({
  content: { type: mongoose.Schema.Types.ObjectId, ref: 'Content' },
  seasonNumber: Number,
  episodeNumber: Number,
  title: String,
  description: String,
  videoUrl: String
});
export default mongoose.model('Episode', epSchema);
