import mongoose from 'mongoose';
const contentSchema = new mongoose.Schema({
  tmdbId: Number,
  title: String,
  description: String,
  type: { type: String, enum: ['movie','series'] },
  genres: [String],
  releaseDate: String,
  poster: String,
  thumbnail: String,
  videoUrl: String,
  seasons: [{
    seasonNumber: Number,
    episodes: [{
      episodeNumber: Number,
      title: String,
      description: String,
      videoUrl: String
    }]
  }]
}, { timestamps: true });
export default mongoose.model('Content', contentSchema);
