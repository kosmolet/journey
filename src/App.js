import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
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
import AuthProvider from "./store/AuthContext";
import NotFound from "./components/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import UserSummary from "./pages/UserSummary";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/account" component={UserSummary} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route
            exact
            path="/resetpassword/:resetToken"
            component={ResetPassword}
          />

          <Route path="/" exact component={Home} />
          <Route path="/destinations" component={Destinations} />
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

          <Route component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
