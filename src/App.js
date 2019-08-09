import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
// components
import { Home } from "./components/Pages/home/Home";
import { Game } from "./components/Pages/game/Game";
import { Scores } from "./components/Pages/scores/Scores.js";
import Navbar from "./components/Navbar";
import './style.css'




class App extends Component {

  render() {
    return (
		<div>
			
      <div className='container'>
			<BrowserRouter>
				<div className="row">

		<Navbar 

		/>
					{/* MENU */}
					
				

					{/* CONTENT */}
					<div className="col-12">

						<Route exact path="/" exact>
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
		</div>
    );
  }
}

export default App;
