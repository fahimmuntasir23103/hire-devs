import React from 'react';
import './Count.css'
const Count = (props) => {
    const {counts} = props;
    let totalCost = 0;
    for(let count of counts){
        totalCost = totalCost + count.salary;
    }
    return (
        <div className='countContainer'>
            <h3>Developers Added: {counts.length} </h3>
            <h4>Developer Salary: {totalCost}</h4>
        </div>
    );
};

export default Count;