import "./DocentesLayout.scss";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Filtros from "../../components/Filtros/Filtros";

const DocentesLayout = () => {
  return (
    <div className="coord">
      <Header />
      <Filtros title={"Editais"} variant={"Coord"} />
      <div className="cardsCont">
        <div className="cardsRow">
          <Card
            title="Grade Horária"
            cardName=":2023/2"
            subtitle={
              ""
            }
            info="TADS"
          />
          <Card
            title="Calendário Acadêmico"
            cardName=": 2023/2"
            subtitle={""}
            info="TADS"
          />
        </div>
      </div>
    </div>
  );
};

export default DocentesLayout;
