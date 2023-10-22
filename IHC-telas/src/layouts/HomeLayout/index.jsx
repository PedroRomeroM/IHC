import "./Home.scss";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Filtros from "../../components/Filtros/Filtros";

const Home = () => {
  return (
    <div className="Challenges">
      <Header />
      <Filtros />
      <h1 className="setembro">Setembro</h1>
      <div className="cardsCont">
        <Card picture="true"/>
        <Card picture="true"/>
        <Card picture="true"/>
        <Card picture="true"/>
        <Card picture="true"/>
      </div>
      <h1 className="setembro">Agosto</h1>
      <div className="cardsCont">
        <Card picture="true"/>
        <Card picture="true"/>
        <Card picture="true"/>
        <Card picture="true"/>
        <Card picture="true"/>
      </div>
    </div>
  );
};

export default Home;
