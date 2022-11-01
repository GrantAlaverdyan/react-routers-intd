import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Grant from './components/Grant';
import Igor from './components/Igor';
import Karina from './components/Karina';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/karina">Karina</Link>
              </li>
              <li>
                <Link to="/grant">Grant</Link>
              </li>
              <li>
                <Link to="/igor">Igor</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path='/grant' element={<Grant />} />
            <Route path='/igor' element={<Igor />} />
            <Route path='/karina' element={<Karina />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
