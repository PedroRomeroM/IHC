import { Link } from "react-router-dom";
import "./Filtros.scss";

const Filtros = ({ title, variant }) => {
  return (
    <>
      <div className="FiltrosContainer">
        <div className="leftContainer">
          <h1>{title || "Página Inicial"}</h1>
          <div className="Entrar">
            <Link to="/home" className="linkNone">
              {variant ? (
                <input type="submit" value="Ementas" />
              ) : (
                <input type="submit" value="Novo Post" />
              )}
            </Link>
          </div>
        </div>
        {variant ? (
          <div className="periodos"> 
            <div className="periodosCard">
              1º Período
            </div>
            <div className="periodosCard">
              2º Período
            </div>
            <div className="periodosCard">
              3º Período
            </div>
            <div className="periodosCard">
              4º Período
            </div>
            <div className="periodosCard">
              5º Período
            </div>
            <div className="periodosCard">
              6º Período
            </div>
          </div>
        ) : (
          <div></div>
        )}
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
