import mongoose from 'mongoose';
const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  avatar: String,
}, { timestamps: true });
export default mongoose.model('Profile', profileSchema);
