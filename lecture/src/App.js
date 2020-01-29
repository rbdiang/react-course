import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'jhg', name: 'Brian', age: 44 },
      { id: 'jlhgl', name: 'Max', age: 28 },
      { id: 'liuvjgh', name: 'Jenn', age: 40 },
    ],
    otherState: 'Some other value',
    showPersons: false
  };

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        { name: name, age: 44 },
        { name: 'Max', age: 28 },
        { name: 'Jenn', age: 45 },
      ]
    });
  }
  changeName = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 44 },
        { name: 'Max', age: 28 },
        { name: 'Jenn', age: 45 },
      ]
    });
  }

  togglePersons = () => {
    let show = this.state.showPersons;
    this.setState({ showPersons: !show })
  }

  render() {
    const buttonStyle = {
      font: 'inherit',
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        this.state.persons.map((p,i) => 
          <Person 
                  id={p.id}
                  name={p.name} 
                  age={p.age} 
                  changed={i === 0 ? this.changeName : null}
                   />)
        // <div>
        //   <Person name={this.state.persons[0].name}
        //     age={this.state.persons[0].age}
        //     changed={this.changeName} />
        //   <Person name={this.state.persons[1].name}
        //     age={this.state.persons[1].age}
        //     click={this.switchNameHandler.bind(this, 'Robert Brian')} />
        //   <Person name={this.state.persons[2].name}
        //     age={this.state.persons[2].age} />
        // </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I am a react app</h1>
        <button
          style={buttonStyle}
          onClick={this.togglePersons}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
