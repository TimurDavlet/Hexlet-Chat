import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Loginpage from "./Components/Loginpage.jsx";
export default App;

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login" component={Loginpage} />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/notfound">
            <Notfound />
          </Route>
          <Redirect to="/notfound" />
        </Switch>
    </Router>
  );
}

function Login() {
  return <h2>Login</h2>;
}

function Notfound() {
  return <h2>404</h2>;
}
