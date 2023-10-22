import "./EmentasLayout.scss";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Filtros from "../../components/Filtros/Filtros";

const EmentasLayout = () => {
  return (
    <div className="EMENTA">
      <Header />
      <Filtros title={"Ementas"} variant="ementas"/>
      <div className="cardsCont">
        <div className="cardsRow">
        <Card title="Análise e Projeto de sistemas" cardName=": DS220"  subtitle={"Sandramara Scandelari"} info="60h"/>
        <Card title="Análise e Projeto de sistemas" cardName=": DS220"  subtitle={"Sandramara Scandelari"} info="60h"/>
        <Card title="Análise e Projeto de sistemas" cardName=": DS220"  subtitle={"Sandramara Scandelari"} info="60h"/>
        <Card title="Análise e Projeto de sistemas" cardName=": DS220"  subtitle={"Sandramara Scandelari"} info="60h"/>
        <Card title="Análise e Projeto de sistemas" cardName=": DS220"  subtitle={"Sandramara Scandelari"} info="60h"/>
        </div>
        <div className="cardsRow">
        <Card title="Análise e Projeto de sistemas" cardName=": DS220"  subtitle={"Sandramara Scandelari"} info="60h"/>
        <Card title="Análise e Projeto de sistemas" cardName=": DS220"  subtitle={"Sandramara Scandelari"} info="60h"/>
        <Card title="Análise e Projeto de sistemas" cardName=": DS220"  subtitle={"Sandramara Scandelari"} info="60h"/>
        <Card title="Análise e Projeto de sistemas" cardName=": DS220"  subtitle={"Sandramara Scandelari"} info="60h"/>
        <Card title="Análise e Projeto de sistemas" cardName=": DS220"  subtitle={"Sandramara Scandelari"} info="60h"/>
        </div>
      </div>

    </div>
  );
};

export default EmentasLayout;
