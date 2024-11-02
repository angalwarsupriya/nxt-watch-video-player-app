import Cookies from 'js-cookie';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Trending from './components/Trending';
import Gaming from './components/Gaming';
import SavedVideos from './components/SavedVideos';
import VideoItemDetails from './components/VideoItemDetails';
import NotFound from './components/NotFound/INDEX.JSX';
//import About from './components/Header'
import './App.css';

function App() {
  const isAuthenticated = !!Cookies.get('jwt_token');
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/login" Component={Login}></Route>
        <Route exact path="/trending" Component={Trending}></Route>
        <Route exact path="/gaming" Component={Gaming}></Route>
        <Route eaxct path="/videos/:id" Component={VideoItemDetails} />
        <Route eaxct path="/saved-videos" Component={SavedVideos} />
        <Route path="/not-found" Component={NotFound} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
