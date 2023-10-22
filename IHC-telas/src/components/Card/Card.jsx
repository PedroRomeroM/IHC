import './Card.scss'
import React from "react";

export const Card = ({cardName,title,subtitle,info,picture}) => {
  return (
    <div className='CardContainer'>
      <div className='CardName'>
        <h3>{cardName || "João Eugênio Marynowski"}</h3>
      </div>
      <div className='CardTitle'>
        <h2> {title || "Lorem Ipsum"}</h2>
      </div>
      <div className='CardSubtitle'>
        {subtitle}
      </div>
      <div className='info'>
        <h3>{info || "24 de Agosto, 2023"} </h3>
        {picture ? <img src="./images/dieval.jpg"></img> : <> </>}
        
      </div>
    </div>
  
  );
};


export default Card;