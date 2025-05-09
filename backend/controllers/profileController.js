import Profile from '../models/Profile.js';
export const createProfile = async (req, res) => {
  const { name, avatar } = req.body;
  const existing = await Profile.findOne({ user: req.user._id, name });
  if (existing) return res.status(400).json({ message: 'Profile exists' });
  const profile = await Profile.create({ user: req.user._id, name, avatar });
  res.json(profile);
};
export const getProfiles = async (req, res) => {
  const profiles = await Profile.find({ user: req.user._id });
  res.json(profiles);
};
