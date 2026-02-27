import { useState, useEffect, useRef } from 'react';
import { fetchMovies, getImageUrl } from '../services/tmdb';
import './MovieRow.css';

interface Movie {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
  vote_average?: number;
  release_date?: string;
  first_air_date?: string;
}

interface MovieRowProps {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const MovieRow = ({ title, fetchUrl, isLargeRow = false }: MovieRowProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies(fetchUrl);
      setMovies(data.results || []);
    };

    fetchData();
  }, [fetchUrl]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.8
        : scrollLeft + clientWidth * 0.8;
      
      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
      setScrollPosition(scrollTo);
    }
  };

  return (
    <div className="movieRow">
      <h2 className="movieRow__title">{title}</h2>
      <div className="movieRow__container">
        {scrollPosition > 0 && (
          <button 
            className="movieRow__arrow movieRow__arrow--left"
            onClick={() => handleScroll('left')}
          >
            ‹
          </button>
        )}
        
        <div className="movieRow__posters" ref={rowRef}>
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className={`movieRow__poster ${isLargeRow ? 'movieRow__poster--large' : ''}`}
            >
              <img
                src={
                  getImageUrl(
                    isLargeRow ? movie.poster_path || '' : movie.backdrop_path || '',
                    isLargeRow ? 'w500' : 'w500'
                  ) || 'https://via.placeholder.com/300x450?text=No+Image'
                }
                alt={movie.title || movie.name || 'Movie'}
                className="movieRow__image"
              />
              <div className="movieRow__poster-info">
                <h3>{movie.title || movie.name}</h3>
                <p>{movie.vote_average ? `${movie.vote_average.toFixed(1)} Rating` : ''}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="movieRow__arrow movieRow__arrow--right"
          onClick={() => handleScroll('right')}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default MovieRow;
