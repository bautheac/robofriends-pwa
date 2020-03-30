import React, { Component } from 'react';
// import CounterButton from './CounterButton.js'


class Header extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    render() { 
        console.log("Header");
        return (
            <div>                
                <h1 className="f1">Robofriends</h1>
                {/* <CounterButton colour={ "red" } /> */}
            </div>            
        )
    }
}

export default Header;