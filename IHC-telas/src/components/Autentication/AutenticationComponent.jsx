import { Link } from "react-router-dom";
import "./AutenticationComponent.scss";

const AutenticationComponent = () => {
  return (
    <>
      <div className="MainContainer">
        <form action="#" className="LoginContainer">
          <h2>LOGIN</h2>
          <div className="Username">
            <img src="./images/user.svg" />
            <input type="text" placeholder="Digite seu GRR ou E-mail" />
          </div>
          <div className="Password">
            <img src="./images/lock.svg" />
            <input type="password" placeholder="Digite sua senha" />
          </div>
          <div className="checkField">
            <div className="checkDivs">
              <input type="radio" name="userType" id="radioprofessor"></input>
              <label for="radioprofessor">Sou Professor</label>
            </div>
            <div className="checkDivs">
              <input type="radio" name="userType" id="radioaluno" />
              <label for="radioaluno">Sou Aluno</label>
            </div>
          </div>
          <div className="Entrar">
            <Link to="/home" className="linkNone">
              <input type="submit" value="Entrar" />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default AutenticationComponent;
