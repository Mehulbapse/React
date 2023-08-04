import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "1",
        },
        {
          name: "Frank",
          id: "2",
        },
        {
          name: "Aldel",
          id: "3",
        },
        {
          name: "chrisl",
          id: "4",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((mon) => {
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
