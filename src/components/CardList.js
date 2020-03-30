import React from 'react';
import Card from './Card.js';


const CardList = ({ robots }) => {
    // if (true) throw new Error("aaaaaahah!");
    return (
        <div>{ 
            robots.map((user, i) => { 
                return <Card key={ robots[i].id } id={ robots[i].id } name={ robots[i].name } homeworld={ robots[i].homeworld }/>
            })
        }</div>
    )
}

export default CardList;