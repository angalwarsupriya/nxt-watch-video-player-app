import Cookies from 'js-cookie';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Trending from './components/Trending';
import Gaming from './components/Gaming';
import SavedVideos from './components/SavedVideos';
import VideoItemDetails from './components/VideoItemDetails';
import NotFound from './components/NotFound';

// const Home = lazy(() => import('./components/Home'));
// const Login = lazy(() => import('./components/Login'));
// const Trending = lazy(() => import('./components/Trending'));
// const Gaming = lazy(() => import('./components/Gaming'));
// const SavedVideos = lazy(() => import('./components/SavedVideos'));
// const NotFound = lazy(() => import('./components/SavedVideos'));

import './App.css';

function App() {
  const isAuthenticated = !!Cookies.get('jwt_token');
  return (
    <BrowserRouter>
      <Routes>
        <Route exact="true" path="/" Component={Home}></Route>
        <Route exact="true" path="/login" Component={Login}></Route>
        <Route exact="true" path="/trending" Component={Trending}></Route>
        <Route exact="true" path="/gaming" Component={Gaming}></Route>
        <Route exact="true" path="/videos/:id" Component={VideoItemDetails} />
        <Route exact="true" path="/saved-videos" Component={SavedVideos} />
        <Route path="/not-found" Component={NotFound} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
