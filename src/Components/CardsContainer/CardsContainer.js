import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Count from '../Count/Count.js';
import './CardsContainer.css'
const CardsContainer = () => {
    const [datas, setDatas] = useState([]);
    const [counts, setCounts] = useState([]);
    useEffect(() =>{
        fetch('./char.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    }, [])
const addDevelopers = card =>{
    const newCount = [...counts, card];
    setCounts(newCount);
}
    return (
        <div className='container'>
            <div className="cards">
            {
                datas.map(data => <Card key={data.id} data={data} card={addDevelopers}></Card>)
            }
            </div>
            <div className="cardCounter">
                <Count counts={counts}></Count>
            </div>
        </div>
    );
};

export default CardsContainer;