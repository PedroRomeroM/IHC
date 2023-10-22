import "./coordenacaoLayout.scss";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Filtros from "../../components/Filtros/Filtros";

const CoordenacaoLayout = () => {
  return (
    <div className="coord">
      <Header />
      <Filtros title={"Coordenação"} variant={"Coord"} />
      <div className="cardsCont">
        <div className="cardsRow">
          <Card
            title="Atendimento"
            cardName=": Vespertino Noturno"
            subtitle={
              "Coordenação: (41) 3361-4915 E-mail: coordtads@ufpr.br Secretária: (41) 3361 4905"
            }
            info="TADS"
          />
          <Card
            title="Comissão de Orientação"
            cardName=": COA"
            subtitle={"Profa. Carina Folena Cardoso Paes"}
            info="TADS"
          />
          <Card
            title="Comissão de Acompanhamento"
            cardName=": CAF"
            subtitle={"Prof. Dr. Jaime Wojciechowski"}
            info="TADS"
          />
          <Card
            title="Comissão orientadora"
            cardName=": COE"
            subtitle={"Prof. Alexander Robert kutzke"}
            info="TADS"
          />
          <Card
            title="Núcleo docente"
            cardName=": NDE"
            subtitle={"Prof. Alessandro Brawerman"}
            info="TADS"
          />
        </div>

        <div className="coordenacao">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle cx="35" cy="35" r="34.5" fill="#EAECDD" stroke="black" />
          </svg>
          <div className="left">
          <div>Coordenador</div>
          <div>Prof. Dr. Alessandro Brawerman</div>
          </div>
        </div>
        <div className="coordenacao">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle cx="35" cy="35" r="34.5" fill="#EAECDD" stroke="black" />
          </svg>
          <div className="left">
          <div>Vice-Coordenadora</div>
          <div>Profa. Dra. Carina Folena Cardoso Paes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoordenacaoLayout;
