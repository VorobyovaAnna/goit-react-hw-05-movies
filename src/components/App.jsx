import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Loader from './Loader';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews';


const AppBar = lazy(() => import('./AppBar' /* webpackChunkName: "app-bar" */));
const HomePage = lazy(() => import('../views/HomePage' /* webpackChunkName: "home-view" */));
const MoviesDetailsPage = lazy(() => import('../views/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */));
const MoviesPage = lazy(() => import('../views/MoviesPage' /* webpackChunkName: "movies-page" */));
const NotFoundView = lazy(() => import('../views/NotFoundPage' /* webpackChunkName: "not-found-view" */));


export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </>   
  );
};
