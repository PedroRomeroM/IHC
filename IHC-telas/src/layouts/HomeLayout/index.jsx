import "./Home.scss";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Filtros from "../../components/Filtros/Filtros";

const ChallengesLayout = () => {
  return (
    <div className="Challenges">
      <Header />
      <Filtros />
      <h1 className="setembro">Setembro</h1>
      <div className="cardsCont">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <h1 className="setembro">Agosto</h1>
      <div className="cardsCont">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ChallengesLayout;
