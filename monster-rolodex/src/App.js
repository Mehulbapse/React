import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
      const searchField = event.target.value.toLocaleLowerCase();
      this.setState(()=>{
        return {searchField}
      })
    }
  

  render() {
    const {monsters ,searchField} = this.state;
    const {onSearchChange} = this;
    const filterMonsters = monsters.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        ></input>
        {filterMonsters.map((mon) => {
          return (
            <div key={mon.id}>
              <h1>{mon.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
