import React from 'react';
import {render} from 'react-dom';
import Pet from './Pet'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Julia" animal="Cat" breed="fish" />
        <Pet name="Bruno" animal="Dog" breed="Havenese" />
        <Pet name="Twitty" animal="Bird" breed="Corn" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
