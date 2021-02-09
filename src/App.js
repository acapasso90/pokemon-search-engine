import './App.css';
import alcremie from "./alcremie.gif";
import Header from "./Header.js"
import PokeSearch from "./PokeSearch.js"
import ExtendedPokeSearch from "./ExtendedPokeSearch.js";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Footer from "./Footer.js"
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
      <header className="App-header">
        <Header />
        <img src={alcremie} alt="alcremie" className="alcremieGif" />
        <p>
       Hey chat! We're building a Pokémon Search Engine together today 🍓 
        </p>
        <div className="row">
    <DropdownButton id='dropdown-button-drop-right' title="Search by Pokémon..">
        <div className="dropdownColumn">
        <NavLink to="/" style={{ textDecoration: 'none' }} className="dropdownLink" >  <Dropdown.Item href="#/action-1">Name</Dropdown.Item> </NavLink>
        <NavLink to="/type" style={{ textDecoration: 'none' }} className="dropdownLink" > <Dropdown.Item href="#/action-2">Type</Dropdown.Item> </NavLink>
  </div>
</DropdownButton>
<Switch>
         <Route path="/" exact component={PokeSearch} />
         <Route path="/type"  component={ExtendedPokeSearch} />
    <Route render={() => <h1>404: page not found</h1>} />
    </Switch>
        </div>
      </header>    </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
