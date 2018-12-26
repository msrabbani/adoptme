const Pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),   
        React.createElement('h2', {}, props.animal),   
        React.createElement('h2', {}, props.breed)   
    ])
}

const App = () => {
  return React.createElement('div', {},
      React.createElement('h1', {}, 'Adopt Me!'),
      React.createElement( Pet, {
          name: "Julia",
          animal: "Cat",
          breed: "fish"
      }), 
      React.createElement( Pet, {
          name: "Julio",
          animal: "Dog",
          breed: "Havanese"
      }),
      React.createElement( Pet, {
          name: "Twity",
          animal: "Bird",
          breed: "Corn"
      }),
      
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
