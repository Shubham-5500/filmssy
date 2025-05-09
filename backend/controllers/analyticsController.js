import User from '../models/User.js';
import Content from '../models/Content.js';
export const popularContent = async (req, res) => {
  const pop = await User.aggregate([
    { $unwind: '$watchHistory' },
    { $group: { _id: '$watchHistory.content', count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 10 }
  ]);
  const ids = pop.map(p => p._id);
  const contents = await Content.find({ _id: { $in: ids } });
  res.json(contents);
};
export const userGrowth = async (req, res) => {
  const growth = await User.aggregate([
    { $group: { _id: { month: { $month: '$createdAt' }, year: { $year: '$createdAt' } }, count: { $sum:1 } } },
    { $sort: { '_id.year':1, '_id.month':1 } }
  ]);
  res.json(growth);
};
