import './App.css'
import Homepage from "./components/homepage"
import Login from "./components/login"
import Options from "./components/options"
import Bmi from "./components/bmi"
import Movie from "./components/movie"
import Feedback from "./components/feedback"
import ABOUT from "./components/about"
import Register from "./components/register"
import HOME from './components/hpage'
import Error from './components/pgerr'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HOME />
          </Route>
          <Route path="/home">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <ABOUT />
            }
          </Route>
          <Route path="/signup">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/movie">
            <Movie />
          </Route>
          <Route path="/options">
            <Options />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/bmi">
            <Bmi />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App