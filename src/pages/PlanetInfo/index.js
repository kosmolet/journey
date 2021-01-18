import PlanetFrame from "../../components/PlanetFrame";

const PlanetInfo = ({ match }) => {
  return (
    <>
      <PlanetFrame planet={match.params.name} />
    </>
  );
};

export default PlanetInfo;
