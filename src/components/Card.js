import React from 'react';

const Card = ({ name, homeworld, id }) => {
    return(
        // <h1>RoboFriends</h1>
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='photo' src={`https://robohash.org/${id}?set=set1;size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{homeworld}</p>
            </div>
        </div>
    )
}

export default Card;