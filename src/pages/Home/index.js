import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import HomeSection from "../../components/HomeSection";
import {
  viewRockets,
  findDestination,
  meetFriends,
  viewZoo,
} from "../../config/homeSectionInfo";
import "./style.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeSection {...findDestination} />
      <HomeSection {...viewRockets} />
      <HomeSection {...meetFriends} />
      <HomeSection {...viewZoo} />
      <Footer />
    </div>
  );
};

export default Home;
