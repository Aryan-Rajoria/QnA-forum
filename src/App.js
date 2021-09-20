import './App.css';
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AllQ from "./view/all_questions/AllQ";
import Home from "./view/home/Home";
import QnA from "./view/QnA/QnA";
import run_this from "./axios";
import Tags from "./view/Tags";
import SingleTag from "./view/SingleTag";
// import {useStateValue} from "./StateProvider";


function App() {
    const [user, dispatch] = useState('Login');
  return (
      <Router>
        <Switch>
            <Route path="/all_questions/:id">
                <AllQ dis={dispatch} user={user}/>
            </Route>
            <Route path="/question/:id" >
                <QnA dis={dispatch} user={user}/>
            </Route>

            <Route path="/stag/:id">
                <SingleTag dis={dispatch} user={user}/>
            </Route>

            <Route path="/tags">
                <Tags dis={dispatch} user={user}/>
            </Route>
          <Route path="/">
              <Home dis={dispatch} user={user}/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
