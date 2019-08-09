import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// components
import { Home } from "../components/home/home";
import { Game } from "../components/game/game.js";
import { Scores } from "../components/scores/scores.js";
import '../style.css'

class Routes extends Component {

	render(){
		return <div className="container">
			

			<BrowserRouter>
				<div className="row">

					{/* MENU */}
					
				

					{/* CONTENT */}
					<div className="col-12">
						<Route path="/" exact>
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
			</BrowserRouter>

		</div>;
	}

}

export default Routes;