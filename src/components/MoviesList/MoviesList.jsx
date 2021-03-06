import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies, location }) => (
    <ol>
        {movies.map(movie => {
        const { id, title } = movie;
        return <li key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
        </Link>
        </li>
    })}
    </ol>
  );

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default MoviesList;