import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MovieRow from './components/MovieRow';
import { requests } from './services/tmdb';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <div className="app__content">
        <MovieRow 
          title="Netflix Originals" 
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <MovieRow 
          title="Trending Now" 
          fetchUrl={requests.fetchTrending}
        />
        <MovieRow 
          title="Top Rated" 
          fetchUrl={requests.fetchTopRated}
        />
        <MovieRow 
          title="Action Movies" 
          fetchUrl={requests.fetchActionMovies}
        />
        <MovieRow 
          title="Comedy Movies" 
          fetchUrl={requests.fetchComedyMovies}
        />
        <MovieRow 
          title="Horror Movies" 
          fetchUrl={requests.fetchHorrorMovies}
        />
        <MovieRow 
          title="Romance Movies" 
          fetchUrl={requests.fetchRomanceMovies}
        />
        <MovieRow 
          title="Documentaries" 
          fetchUrl={requests.fetchDocumentaries}
        />
      </div>
      <footer className="app__footer">
        <div className="app__footer-content">
          <p>&copy; 2026 Kodflix. All rights reserved.</p>
          <div className="app__footer-links">
            <span>Audio Description</span>
            <span>Help Center</span>
            <span>Gift Cards</span>
            <span>Media Center</span>
            <span>Investor Relations</span>
            <span>Jobs</span>
            <span>Terms of Use</span>
            <span>Privacy</span>
            <span>Legal Notices</span>
            <span>Cookie Preferences</span>
            <span>Corporate Information</span>
            <span>Contact Us</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
