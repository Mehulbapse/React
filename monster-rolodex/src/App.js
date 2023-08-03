import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Mehul", lastName: "Bapse" },
      company: "xyz",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hii {this.state.name.firstName}</p>
          <button
            onClick={() => {
              this.setState(
                () =>{
                  return {
                    name:{firstName : 'Omkar', lastName: "Bapse"}
                  }
                }
              );
              
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
