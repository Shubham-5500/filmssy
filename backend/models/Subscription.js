import mongoose from 'mongoose';
const subscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  plan: String,
  status: String,
  startDate: Date,
  endDate: Date
});
export default mongoose.model('Subscription', subscriptionSchema);
