import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const TMDB_API_KEY = process.env.TMDB_API_KEY; // Add this to your .env file

// Fetch full metadata from TMDB using the ID (works for movies or series)
export const fetchMetadataFromTMDB = async (tmdbId, type = 'movie') => {
    try {
        const url = `https://api.themoviedb.org/3/${type}/${tmdbId}?api_key=${TMDB_API_KEY}&language=en-US`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("TMDB fetch error:", error.message);
        throw new Error("Failed to fetch metadata from TMDB");
    }
};

// Optional: search TMDB by title if user doesn't have the ID
export const searchTMDB = async (query, type = 'movie') => {
    try {
        const url = `https://api.themoviedb.org/3/search/${type}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`;
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        console.error("TMDB search error:", error.message);
        throw new Error("Failed to search TMDB");
    }
};
