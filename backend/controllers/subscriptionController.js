import Subscription from '../models/Subscription.js';
export const subscribePlan = async (req, res) => {
  const { plan } = req.body;
  const sub = new Subscription({
    user: req.user._id,
    plan,
    status: 'active',
    startDate: new Date(),
    endDate: new Date(new Date().setFullYear(new Date().getFullYear()+1))
  });
  await sub.save();
  res.json(sub);
};
export const getSubscription = async (req, res) => {
  const sub = await Subscription.findOne({ user: req.user._id });
  res.json(sub);
};
