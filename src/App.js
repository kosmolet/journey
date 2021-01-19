import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Signup from "./pages/Signup";
import PlanetInfo from "./pages/PlanetInfo";
import "aos/dist/aos.css";
import Rockets from "./pages/Rockets";
import Friends from "./pages/Friends";
import Zoo from "./pages/Zoo";
import Hibernation from "./pages/Hibernation";
import Radiation from "./pages/Radiation";
import FilmMovie from "./pages/FilmMovie";
import Internet from "./pages/Internet";
import Gym from "./pages/Gym";
import Services from "./pages/Services";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/destinations" component={Destinations} />
          <Route path="/signup" component={Signup} />
          <Route path="/services" component={Services} />
          <Route path="/planet/:name" component={PlanetInfo} />
          <Route path="/rockets" component={Rockets} />
          <Route path="/friends" component={Friends} />
          <Route path="/zoo" component={Zoo} />
          <Route path="/hibernation" component={Hibernation} />
          <Route path="/radiation" component={Radiation} />
          <Route path="/filmmovie" component={FilmMovie} />
          <Route path="/internet" component={Internet} />
          <Route path="/gym" component={Gym} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
