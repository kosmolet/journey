import Banner from "../../components/Banner";
import CardsList from "../../components/CardsList";
import Footer from "../../components/Footer";
import destinations from "../../config/destinations";
import "./style.css";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <CardsList cardItems={destinations} /> */}
      <Footer />
    </div>
  );
};

export default Home;
