import './App.css';
import Contact from './components/Contact';
// import Home from './components/Home';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Contact />
      {/* 
      <Router>
        <div>
          <Switch>
            <Route exact path="/destination">
              <Destination />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router> */}
    </div>
  );
}

export default App;
