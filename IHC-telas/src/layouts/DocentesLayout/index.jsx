import "./DocentesLayout.scss";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Filtros from "../../components/Filtros/Filtros";
import Docente from "../../components/Docente/Docente";

const EditaisLayout = () => {
  return (
    <div className="coord">
      <Header />
      <Filtros title={"Docentes"} variant={"Coord"} />
      <div className="cardsConte">
        <div className="cardsRow">
          <div className="columns">
            <div className="docente">DOCENTE</div>
            <div className="email">EMAIL</div>
            <div className="telefone"> TELEFONE</div>
          </div>
          <Docente />
          <Docente />
          <Docente />
          <Docente />
          <Docente />
          <Docente />
        </div>
      </div>
    </div>
  );
};

export default EditaisLayout;
