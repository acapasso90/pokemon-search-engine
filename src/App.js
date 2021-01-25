import './App.css';
import alcremie from "./alcremie.gif";
import Header from "./Header.js"
import PokeSearch from "./PokeSearch.js"
import ExtendedPokeSearch from "./ExtendedPokeSearch.js";
import Footer from "./Footer.js"

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <Header />
        <img src={alcremie} alt="alcremie" className="alcremieGif" />
        <p>
       Hey chat! We're building a Pokémon Search Engine together today 🍓 
        </p>
        <PokeSearch />
      </header>    </div>
      <Footer />
    </div>
  );
}

export default App;
