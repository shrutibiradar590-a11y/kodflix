import axios from 'axios';

// TMDB API integration
// Note: This demo uses mock data with real TMDB image URLs.
// To use actual TMDB API, get a free API key from https://www.themoviedb.org/settings/api

const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Using endpoint paths without API key - will fall back to mock data
export const requests = {
  fetchTrending: `/trending/all/week?language=en-US`,
  fetchNetflixOriginals: `/discover/tv?with_networks=213`,
  fetchTopRated: `/movie/top_rated?language=en-US`,
  fetchActionMovies: `/discover/movie?with_genres=28`,
  fetchComedyMovies: `/discover/movie?with_genres=35`,
  fetchHorrorMovies: `/discover/movie?with_genres=27`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749`,
  fetchDocumentaries: `/discover/movie?with_genres=99`,
};

export const getImageUrl = (path: string, size: string = 'w500') => {
  if (!path) return null;
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export const fetchMovies = async (endpoint: string) => {
  try {
    // Try to fetch from TMDB (will fail without valid API key)
    const response = await tmdbApi.get(endpoint);
    return response.data;
  } catch (error) {
    console.log('TMDB API requires a valid API key. Using mock data instead.');
    // Return mock data if API fails
    return getMockData();
  }
};

// Mock data for testing - using real TMDB image paths
const mockMovies = [
  {
    id: 1,
    title: 'Inception',
    name: 'Inception',
    overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    poster_path: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    backdrop_path: '/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    vote_average: 8.4,
    release_date: '2010-07-16',
    first_air_date: '2010-07-16',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    name: 'The Dark Knight',
    overview: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
    poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop_path: '/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg',
    vote_average: 8.5,
    release_date: '2008-07-18',
    first_air_date: '2008-07-18',
  },
  {
    id: 3,
    title: 'Interstellar',
    name: 'Interstellar',
    overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    poster_path: '/gEU2QniL6C8z19uVOtYnZ5UYj52.jpg',
    backdrop_path: '/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
    vote_average: 8.3,
    release_date: '2014-11-07',
    first_air_date: '2014-11-07',
  },
  {
    id: 4,
    title: 'The Matrix',
    name: 'The Matrix',
    overview: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdrop_path: '/l4QHerZSbMmIRCEuM1A7MwzDVdb.jpg',
    vote_average: 8.2,
    release_date: '1999-03-31',
    first_air_date: '1999-03-31',
  },
  {
    id: 5,
    title: 'Pulp Fiction',
    name: 'Pulp Fiction',
    overview: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    poster_path: '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    backdrop_path: '/suaEOtk1N1sgg2jhbfaL6V2l4xF.jpg',
    vote_average: 8.5,
    release_date: '1994-10-14',
    first_air_date: '1994-10-14',
  },
  {
    id: 6,
    title: 'Fight Club',
    name: 'Fight Club',
    overview: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into much more.',
    poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    backdrop_path: '/hZkgoQYus5vegHoetLkCJzb17zJ.jpg',
    vote_average: 8.4,
    release_date: '1999-10-15',
    first_air_date: '1999-10-15',
  },
  {
    id: 7,
    title: 'Forrest Gump',
    name: 'Forrest Gump',
    overview: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man.',
    poster_path: '/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
    backdrop_path: '/3h1JZGDhZ8nzxdgVnHWPN0SJUEND.jpg',
    vote_average: 8.5,
    release_date: '1994-07-06',
    first_air_date: '1994-07-06',
  },
  {
    id: 8,
    title: 'The Shawshank Redemption',
    name: 'The Shawshank Redemption',
    overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    backdrop_path: '/kXfqcdQKsToOd0gSyhJYXDb6yui.jpg',
    vote_average: 8.7,
    release_date: '1994-09-23',
    first_air_date: '1994-09-23',
  },
  {
    id: 9,
    title: 'Avengers: Endgame',
    name: 'Avengers: Endgame',
    overview: 'After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.',
    poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    backdrop_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
    vote_average: 8.3,
    release_date: '2019-04-26',
    first_air_date: '2019-04-26',
  },
  {
    id: 10,
    title: 'The Godfather',
    name: 'The Godfather',
    overview: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
    vote_average: 8.7,
    release_date: '1972-03-24',
    first_air_date: '1972-03-24',
  },
  {
    id: 11,
    title: 'Parasite',
    name: 'Parasite',
    overview: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    backdrop_path: '/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg',
    vote_average: 8.5,
    release_date: '2019-11-01',
    first_air_date: '2019-11-01',
  },
  {
    id: 12,
    title: 'Spider-Man: Into the Spider-Verse',
    name: 'Spider-Man: Into the Spider-Verse',
    overview: 'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions.',
    poster_path: '/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
    backdrop_path: '/x2IqsMlpbOhS8zIUJfyl1yO4gHF.jpg',
    vote_average: 8.4,
    release_date: '2018-12-14',
    first_air_date: '2018-12-14',
  },
  {
    id: 13,
    title: 'The Lion King',
    name: 'The Lion King',
    overview: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
    poster_path: '/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg',
    backdrop_path: '/nRXO2SnOA75OsWhNhXst7xZpyHg.jpg',
    vote_average: 8.3,
    release_date: '1994-06-24',
    first_air_date: '1994-06-24',
  },
  {
    id: 14,
    title: 'Gladiator',
    name: 'Gladiator',
    overview: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    poster_path: '/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
    backdrop_path: '/hND7xAaxxBgaIspp9iMsaEXOSTz.jpg',
    vote_average: 8.2,
    release_date: '2000-05-05',
    first_air_date: '2000-05-05',
  },
  {
    id: 15,
    title: 'The Silence of the Lambs',
    name: 'The Silence of the Lambs',
    overview: 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
    poster_path: '/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg',
    backdrop_path: '/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg',
    vote_average: 8.3,
    release_date: '1991-02-14',
    first_air_date: '1991-02-14',
  },
  {
    id: 16,
    title: 'Dune',
    name: 'Dune',
    overview: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset while its heir becomes troubled by visions.',
    poster_path: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
    backdrop_path: '/jYEW5eZkKyXW9iY3vW0l4zjwFh0.jpg',
    vote_average: 7.8,
    release_date: '2021-10-22',
    first_air_date: '2021-10-22',
  },
];

const getMockData = () => ({
  results: [...mockMovies].sort(() => Math.random() - 0.5),
});

export default tmdbApi;
