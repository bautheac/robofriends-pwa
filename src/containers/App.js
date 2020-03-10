import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js'
import Scroll from '../components/Scroll.js'
import ErrorBoundary from '../components/ErrorBoundary.js'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => { return response.json()} )
    .then( users => { this.setState({ robots: users }) });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    // console.log(filteredRobots);
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    })

    return !robots.length ? <h1>loading...</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>robofriends</h1>
          <SearchBox searchChange={ this.onSearchChange }/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={ filteredRobots }/> 
            </ErrorBoundary>            
          </Scroll>          
        </div>
      );        
  }
}

export default App;
