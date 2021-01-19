import CardsList from "../../components/CardsList";
import services from "../../config/services";
import "./style.css";

const Services = () => {
  return (
    <>
      <div className="services">
        <h1 className="services__title">Explore our services</h1>
        <CardsList cardItems={services} />
      </div>
    </>
  );
};

export default Services;
