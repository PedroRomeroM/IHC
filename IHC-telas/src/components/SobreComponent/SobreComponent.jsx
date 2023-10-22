import { Link } from "react-router-dom";
import "./SobreComponent.scss";

const SobreComponent = () => {
  return (
    <div className="SobreContainer">
      <div className="textBox">
        <h2>Tecnologia em Análise e Desenvolvimento de Sistemas</h2>O curso
        superior de Tecnologia em Análise e Desenvolvimento de Sistemas tem como
        objetivo formar um profissional com a competência para analisar as
        necessidades e demandas da sociedade, construindo soluções de
        desenvolvimento de softwares que explorem e apliquem os recursos de
        informática e de novas tecnologias, atuando com princípios éticos e
        promovendo o desenvolvimento humano. A grade curricular contempla
        disciplinas aplicadas à area de desenvolvimento de sistemas de
        informação, focando, principalmente, na concepção e modelagem de
        software, programação de software e criação de projetos aplicados.
        Durante o curso, os alunos podem realizar estágios em empresas de forma
        a complementar sua formação profissional, bem como participar de
        projetos de iniciação científica, para formação acadêmica; além de
        usufruir dos diversos benefícios oferecidos aos estudantes da
        Universidade Federal do Paraná.

        <div className="botton">
            <div className="vagas">
            Número de Vagas: 40 (Vespertino) e 80 (Noturno)
            </div>
            <div className="duracao">
            Duração Recomendada: 3 anos
            </div>
        </div>
      </div>
      <div className="aboutImage">
        <img src="./images/imagemFederal.jpg" alt="Predio do curso tads" />
        <div className="endereco"> R. Dr. Alcides Vieira Arcoverde, 1225 - Jardim das Américas, Curitiba - PR, 81520-260</div> 
      </div>
    </div>
  );
};

export default SobreComponent;
