import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Signup from "./pages/Signup";
import PlanetInfo from "./pages/PlanetInfo";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/destinations" component={Destinations} />
          <Route path="/signup" component={Signup} />
          <Route path="/planet/:name" component={PlanetInfo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
