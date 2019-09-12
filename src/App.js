import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters : [ ]
    };
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(uesrs => this.setState({monsters: uesrs}));
  }

  render(){
    return(
      <div className='App'>
        <HomePage />
      </div>
    )
  }
}

export default App;
