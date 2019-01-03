import React from 'react'
import ReactDOM from 'react-dom'
import Pet from "./Pet"

class App extends React.Component {
  handleTitleClick() {
    alert("You Click the Title...");
  }

  render() {
    return React.createElement(
      "div",
      {},
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Julia",
        animal: "Cat",
        breed: "fish"
      }),
      React.createElement(Pet, {
        name: "Julio",
        animal: "Dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Twity",
        animal: "Bird",
        breed: "Corn"
      })
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
