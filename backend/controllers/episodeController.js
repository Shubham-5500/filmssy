import Content from '../models/Content.js';
export const addEpisode = async (req, res) => {
  const { contentId, seasonNumber, episode } = req.body;
  const content = await Content.findById(contentId);
  if (!content) return res.status(404).json({ message: 'Not found' });
  let season = content.seasons.find(s => s.seasonNumber === seasonNumber);
  if (!season) {
    season = { seasonNumber, episodes: [] };
    content.seasons.push(season);
  }
  season.episodes.push(episode);
  await content.save();
  res.json(content);
};
export const getEpisodes = async (req, res) => {
  const { contentId, seasonNumber } = req.query;
  const content = await Content.findById(contentId);
  if (!content) return res.status(404).json({ message: 'Not found' });
  const season = content.seasons.find(s => s.seasonNumber === parseInt(seasonNumber));
  res.json(season ? season.episodes : []);
};
