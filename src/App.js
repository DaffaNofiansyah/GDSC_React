import React, {useState} from 'react';
import TenkiNoKo from "./Movie-2.jpg";
import KoeNoKatachi from "./Movie-3.jpg";
import SpiritedAway from "./Movie-4.jpg";
import MyNeighborTotoro from "./Movie-5.jpg";
import UchiageHanabi from "./Movie-6.jpg"
import InfinityWar from "./Movie-7.jpg";
import EndGame from "./Movie-8.png";
import DeadPool from "./Movie-9.jpg";
import FarFromHome from "./Movie-10.png";
import Venom from "./Movie-16.jpg";
import './App.css';

const PAGE_MOVIES = 'movies';
const PAGE_WISHLIST = 'wishlist';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [page, setPage] = useState (PAGE_MOVIES);

  const [movies] = useState([
    {
      name: 'TENKI NO KO',
      year: 'A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather',
      image: TenkiNoKo,
    },
    {
      name: 'KOE NO KATACHI',
      year: 'A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption',
      image: KoeNoKatachi,
    },
    {
      name: 'SPIRITED AWAY',
      year: 'When her family move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, and spirits, and where human are changed into beasts',
      image: SpiritedAway,
    },
    {
      name: 'MY NEIGHBOR TOTORO',
      year: 'When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby',
      image: MyNeighborTotoro,
    },
    {
      name: 'UCHIAGE HANABI',
      year: 'In this sci-fi tinged story of young love and teenage turmoil, a mysterious glowing ball offers Norimichi a second chance at securing his dream date',
      image: UchiageHanabi,
    },
    {
      name: ' AVENGERS : INFINITY WAR',
      year: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe',
      image: InfinityWar,
    },
    {
      name: 'AVENGERS : ENDGAME',
      year: 'After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse the Thanos snap',
      image: EndGame,
    },
    {
      name: 'DEADPOOL',
      year: 'A wisecracking mercenary gets experimented on and become immortal but ugly, and sets out to track down the man who ruined his looks',
      image: DeadPool,
    },
    {
      name: 'SPIDERMAN : FAR FROM HOME',
      year: 'Following the events of Avengers : Endgame, Spider-Man must step up to take on new threats in a world that has changed forever',
      image: FarFromHome,
    },
    {
      name: 'VENOM',
      year: 'A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it',
      image: Venom,
  } 
  ]);

  const addToWishlist = (movie) => {
    setWishlist([...wishlist, {...movie }]);
  };

  const removeFromWishlist = (movieToRemove) => {
    setWishlist(wishlist.filter(movie => movie !== movieToRemove))
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  const renderMovies = () => (
    <>
          <h1>MOVIES</h1>
          <div className="movies">
            {movies.map((movie, idx) => (
              <div className="movie" key={idx}>
                <h3>{movie.name}</h3>
                <h4>{movie.year}</h4>
                <img src={movie.image} alt={movie.name}/>
                <button onClick={() => addToWishlist(movie)}>
                  Add to Wishlist
                  </button>
              </div>
              
            ))}
          </div>
        </>
  );

  const renderWishlist = () => (
    <>
          <h1>WISHLIST</h1>
          <div className="movies">
            {wishlist.map((movie, idx) => (
              <div className="movie" key={idx}>
                <h3>{movie.name}</h3>
                <h4>{movie.year}</h4>
                <img src={movie.image} alt={movie.name}/>
                <button onClick={() => removeFromWishlist(movie)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        </>
  );

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_WISHLIST)}>
          Wishlist ({wishlist.length})
          </button>
        <button onClick={() => navigateTo(PAGE_MOVIES)}>
          View Movies
          </button>
      </header>
      {page === PAGE_MOVIES && renderMovies()}
      {page === PAGE_WISHLIST && renderWishlist()}
    </div>
  );
}

export default App;
