import React, { Component } from 'react';
import { render } from 'react-dom';
import Routes from "./Routes/baseRoute";



class App extends Component {

  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
