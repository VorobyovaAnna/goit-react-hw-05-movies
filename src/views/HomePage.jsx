import MoviesList from '../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchFilms } from '../services/api';

export default function HomePage() {
    const [movies, setMovies] = useState(null);
    const location = useLocation();

    useEffect(() => {
        async function fetchMovies() {
            try {
                const data = await fetchFilms();
                setMovies(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchMovies();
    }, []);
    
  return (
    <>
      <h2>
        Trending today
      </h2>
        {movies && <MoviesList movies={movies} location={location} />}
    </>
  );
}