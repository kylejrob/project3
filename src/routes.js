import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// components
import { Home, Services, Contact } from "./components";
import './style.css'

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
							{ ({ match }) => <Services show={match !== null} /> }
						</Route>
						<Route path="/scores">
							{ ({ match }) => <Contact show={match !== null} /> }
						</Route>
					</div>

				</div>
			</BrowserRouter>

		</div>;
	}

}

export default Routes;