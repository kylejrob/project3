import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
// components
import { Home } from "./components/Pages/home/home";
import { Game } from "./components/Pages/game/game";
import { Scores } from "./components/Pages/scores/scores.js";
import { Login } from "./components/Pages/login/login";
import './style.css'




class App extends Component {

  render() {
    return (
      <div className='container'>
			<BrowserRouter>
				<div className="row">

					{/* MENU */}
					
				

					{/* CONTENT */}
					<div className="col-12">

						<Route path="/" exact>
							{ ({ match }) => <Login show={match !== null} /> }
						</Route>

						<Route path="/home" exact>
							{ ({ match }) => <Home show={match !== null} /> }
						</Route>
						
						<Route path="/game">
							{ ({ match }) => <Game show={match !== null} /> }
						</Route>
						<Route path="/scores">
							{ ({ match }) => <Scores show={match !== null} /> }
						</Route> 
					</div>

				</div>
			</BrowserRouter>      </div>
    );
  }
}

export default App;
