import './css/App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContexts';

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-conent'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Favorites" element={<Favorites />}/>
        </Routes>
      </main>
    </MovieProvider>
  );
}
export default App