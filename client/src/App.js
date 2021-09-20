import Home from "./pages/Home";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/register">
        {user ? <Home /> : <Register/>}
      </Route>
      <Route path="/login">
        {user ? <Home/> : <Login/>}
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
