import { Link } from "react-router-dom";
import "./Filtros.scss";

const Filtros = ({ title }) => {
  return (
    <>
      <div className="FiltrosContainer">
        <div className="leftContainer">
          <h1>{title || "Página Inicial"}</h1>
          <div className="Entrar">
            <Link to="/home" className="linkNone">
              <input type="submit" value="Novo Post" />
            </Link>
          </div>
        </div>
        <div className="rightContainer">
        <img src="./images/funnel-simple.svg" />
          <div className="Pesquisa">
            <input type="text" placeholder="Nome do Post" />
            <img src="./images/magnifying-glass.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filtros;
