import mongoose from 'mongoose';
const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: { type: mongoose.Schema.Types.ObjectId, ref: 'Content' },
  rating: Number,
  comment: String
}, { timestamps: true });
export default mongoose.model('Review', reviewSchema);
