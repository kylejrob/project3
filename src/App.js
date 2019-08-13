import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
// components
import { Home } from "./components/Pages/home/home";
import { Game } from "./components/Pages/game/game";
import { Scores } from "./components/Pages/scores/scores";
import { Patch } from "./components/Pages/patch/patch";
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

						<Route exact path="/" >
							{ ({ match }) => <Home show={match !== null} /> }
						</Route>
						
						<Route path="/game">
							{ ({ match }) => <Game show={match !== null} /> }
						</Route>
						<Route path="/scores">
							{ ({ match }) => <Scores show={match !== null} /> }
						</Route> 
						<Route path="/patch">
							{ ({ match }) => <Patch show={match !== null} /> }
						</Route> 
					</div>

				</div>
			</BrowserRouter>      </div>
		</div>
    );
  }
}

export default App;
