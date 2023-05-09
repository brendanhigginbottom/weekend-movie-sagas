import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx';
import Details from '../Details/Details.jsx';
import Form from '../Form/Form.jsx';
import { useSelector } from 'react-redux';

function App() {
  

  return (
    <div className="App">
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Details page */}
        <Route exact path="/details">
          <Details />
        </Route>

        {/* Add Movie page */}
        <Route exact path="/addmovie">
          <Form />
        </Route>
      </Router>
    </div>
  );
}


export default App;
