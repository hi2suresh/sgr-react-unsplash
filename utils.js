import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos?',
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
  },
});

export default customFetch;
