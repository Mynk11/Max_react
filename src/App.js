import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    person: [{ name: "Hitch", age: 29 }, { name: "mynk", age: 30 }, { name: "Gupta", age: 31 }]
  }

  switchNamehandler = () => {
    this.setState({ person: [{ name: "Maximilian", age: 29 }, { name: "mynk", age: 30 }, { name: "Gupta", age: 21 }] })
  }
  render() {
    //return React.createElement('div', { className: "App" }, React.createElement('h1', { className: "h1" }, "Hi, I\'m a react app"));
    return (
      <div className="App">
        <h1 className="h1">Hi, I'm a react app</h1>
        <button onClick={this.switchNamehandler}>Switch Name</button>
        <p>This really Work's</p>
        <Person title="React Days">Racing</Person>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}>Racing</Person>

      </div>
    );


  }
}

export default App;
