const Pet = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'Anim'),   
        React.createElement('h2', {}, 'Bagoy'),   
        React.createElement('h2', {}, 'Cerry'),   
        React.createElement('h2', {}, 'Deblo'),   
        React.createElement('h2', {}, 'Elisa')   
    ])
}

const App = () => {
  return React.createElement('div', {},
      React.createElement('h1', {}, 'Adopt Me!'),
      React.createElement(Pet)
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
