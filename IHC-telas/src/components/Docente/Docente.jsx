import "./Docente.scss";
import React from "react";

export const Docente = ({ cardName, title, subtitle, info, picture }) => {
  return (
    <div className="DocenteContainer">
      <div className="tablecolumn1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle cx="20" cy="20" r="19.5" fill="#EAECDD" stroke="black" />
        </svg>
        <p> Sandramara Scandelari Kusano de Paula </p>
      </div>
      <div className="tablecolumn2">
        <p>sskusano@ufpr.br </p>
      </div>
      <div className="tablecolumn3">
        <p>41 9 9213-3452 </p>
      </div>
    </div>
  );
};

export default Docente;
