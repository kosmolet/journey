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
      <HomeSection {...viewRockets} />
      <HomeSection {...findDestination} />
      <HomeSection {...meetFriends} />
      <HomeSection {...viewZoo} />
      <Footer />
    </div>
  );
};

export default Home;
