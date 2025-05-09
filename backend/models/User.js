import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  firebaseUid: { type: String, unique: true },
  email: String,
  displayName: String,
  photoURL: String,
  role: { type: String, enum: ['user','admin'], default: 'user' },
  preferences: { type: Object, default: {} },
  watchlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Content' }],
  watchHistory: [{
    content: { type: mongoose.Schema.Types.ObjectId, ref: 'Content' },
    progress: Number,
    watchedAt: { type: Date, default: Date.now }
  }],
}, { timestamps: true });
export default mongoose.model('User', userSchema);
