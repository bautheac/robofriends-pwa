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

    var urls = new Array(15);
    for(var i = 0; i < urls.length; i++){
      urls[i] = 'https://swapi.co/api/people/' + (i + 1)
    }

    Promise.all(urls.map(async function(url, i) {
          let resp = await fetch(url);
          const character = await resp.json();
          character.id = i; character.email = i + 'test.on';
          resp = await fetch(character.homeworld);
          const homeworld = await resp.json();
          character.homeworld = homeworld.name;
          return character;
        }))
        .then( users => { this.setState({ robots: users })});
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
          <h1 className='f1'>Star Wars</h1>
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
