import React from 'react';
import './App.css';

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
        {
          this.state.monsters.map(monster => <h2 key={monster.id}>{monster.name}</h2>)
        }
      </div>
    )
  }
}

export default App;
