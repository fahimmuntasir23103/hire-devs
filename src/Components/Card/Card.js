import React, { useEffect, useState } from 'react';
import './Card.css'
import { FaCalculator } from "react-icons/fa";

const Card = (props) => {
    const {name, worksAt, position, workingFrom, salary, img} = props.data;
    return (
        <div className='cardContainer'>
          <div className="card">
          <div className="image">
              <img src={img} alt="" />
          </div>
          <div className="cardInfo">
            <p><span>Name: </span>{name}</p>
            <p><span>Works at: </span>{worksAt}</p>
            <p><span>Position: </span> {position}</p>
            <p><span>Working From: </span> {workingFrom}</p>
            <p><span>Salary: </span>{salary}</p>
          </div>
          <button onClick={() => props.card(props.data)} className="countBtn"><FaCalculator></FaCalculator> Count Total</button>
          </div>
        </div>
    );
};

export default Card;