import React, {
  Component
} from 'react';
import Person from './Person/Person';
import classes from './App.module.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
console.log("classes is :", classes.red);
class App extends Component {
  state = {
    person: [{
      name: "Hitch",
      age: 29,
      key: "fdvcxcdf"
    }, {
      name: "mynk",
      age: 30,
      key: "fdsdfcvvc"
    }, {
      name: "Gupta",
      age: 31,
      key: "fdsdfzcxc"
    }],
    showPersons: false
  }

  /* switchNamehandler = (newName) => {
    this.setState({ person: [{ name: newName, age: 29 }, { name: "mynk", age: 30 }, { name: "Gupta", age: 21 }] })
  } */
  nameChangedHandler = (event, id) => {
    console.log("Id is :", id);
    console.log("event is:", event.target.value);
    var personIndex = this.state.person.findIndex(p => {
      return p.key === id;
    })

    console.log("personIndes is :", personIndex);
    const personIndexed = {
      ...this.state.person[personIndex]
    }
    personIndexed.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = personIndexed;
    console.log("updated person is:", persons);
    this.setState({
      person: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    console.log("personIndex is :", personIndex);
    const persons = [...this.state.person];
    console.log("Persons is :", persons);
    persons.splice(personIndex, 1);
    this.setState({
      person: persons
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }



  render() {
    //return React.createElement('div', { className: "App" }, React.createElement('h1', { className: "h1" }, "Hi, I\'m a react app"));
    //bind method id preffered to send arguments
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",

    }


    let persons = null;

    if (this.state.showPersons) {
      persons = (<div> {
        this.state.person.map((per, index) => {
          return <ErrorBoundary key={per.key}>
            <Person change={
              (event) => this.nameChangedHandler(event, per.key)
            }
              click={
                () => this.deletePersonHandler(index)
              }
              name={
                per.name
              }
              age={
                per.age
              }
            /></ErrorBoundary>
        })
      } </div>);
      style.backgroundColor = "red";

    }

    let assignedClasses = [];
    if (this.state.person.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.person.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (

      <div className={classes.App}>
        <h1 className="h1" > Hi, I 'm a react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working!!</p>

        <button style={
          style
        }
          onClick={() => this.togglePersonHandler()}> Toggle person
        </button>
        {persons}
      </div>

    );


  }
}

export default App;