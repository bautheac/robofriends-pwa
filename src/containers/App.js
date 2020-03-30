import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions.js';

import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js'
import Scroll from '../components/Scroll.js'
import Header from '../components/Header.js'
import ErrorBoundary from '../components/ErrorBoundary.js'

import './App.css';


if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}


const mapStateToProps = state => { 
  return { 
    searchField: state.searchRobots.searchField, robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending, error: state.requestRobots.error }
};

const mapDispatchToProps = (dispatch) => {
  return { 
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
};

class App extends Component { 

  componentDidMount() { this.props.onRequestRobots() }


  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    })

    return isPending ? <h1>loading...</h1> :
      (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={ onSearchChange }/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={ filteredRobots }/> 
            </ErrorBoundary>            
          </Scroll>          
        </div>
      );
       
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
