import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    person: [{ name: "Hitch", age: 29 }, { name: "mynk", age: 30 }, { name: "Gupta", age: 31 }]
  }

  switchNamehandler = (newName) => {
    this.setState({ person: [{ name: newName, age: 29 }, { name: "mynk", age: 30 }, { name: "Gupta", age: 21 }] })
  }
  nameChangedHandler = (event) => {
    this.setState({ person: [{ name: "Maximillian", age: 29 }, { name: event.target.value, age: 30 }, { name: "Gupta", age: 21 }] })
  }
  render() {
    //return React.createElement('div', { className: "App" }, React.createElement('h1', { className: "h1" }, "Hi, I\'m a react app"));
    //bind method id preffered to send arguments
    const style = {
      backGroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"

    }
    return (
      <div className="App">
        <h1 className="h1">Hi, I'm a react app</h1>

        <button style={style} onClick={this.switchNamehandler.bind(this, "Maximillian")}>Switch Name</button>
        <button onClick={() => this.switchNamehandler("MAyank")}>Switch_Name</button>

        <p>This really Work's</p>
        {/* <Person title="React Days">Racing</Person> */}
        <Person  title="React Days" change={this.nameChangedHandler} click={this.switchNamehandler.bind(this, "Maxi!")} name={this.state.person[0].name} age={this.state.person[0].age} >Racing</Person>
        <Person title="React Days" change={this.nameChangedHandler} click={this.switchNamehandler.bind(this, "Maxi!")} name={this.state.person[1].name} age={this.state.person[1].age} >Racing</Person>
        <Person title="React Days" change={this.nameChangedHandler} click={this.switchNamehandler.bind(this, "Maxi!")} name={this.state.person[2].name} age={this.state.person[2].age} >Racing</Person>
      </div>
    );


  }
}

export default App;
