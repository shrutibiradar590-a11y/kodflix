import { useState, useEffect } from 'react';
import { fetchMovies, requests, getImageUrl } from '../services/tmdb';
import './Banner.css';

interface Movie {
  id: number;
  title?: string;
  name?: string;
  overview?: string;
  backdrop_path?: string;
  poster_path?: string;
  vote_average?: number;
  release_date?: string;
  first_air_date?: string;
}

const Banner = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies(requests.fetchNetflixOriginals);
      const movies = data.results || [];
      if (movies.length > 0) {
        // Pick a random movie for the banner
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie);
      }
    };

    fetchData();
  }, []);

  const truncate = (str: string | undefined, n: number) => {
    if (!str) return '';
    return str.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: movie?.backdrop_path 
          ? `url(${getImageUrl(movie.backdrop_path, 'original')})`
          : movie?.poster_path
          ? `url(${getImageUrl(movie.poster_path, 'original')})`
          : 'linear-gradient(to right, #141414, #000000)',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || 'Welcome to Kodflix'}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button banner__button--play">
            <span>▶</span> Play
          </button>
          <button className="banner__button banner__button--info">
            <span>ℹ</span> More Info
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
