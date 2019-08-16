import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
// components
import { Home } from "./components/Pages/home/home";
import { Scores } from "./components/Pages/scores/scores";
import { Patch } from "./components/Pages/patch/patch";
import Navbar from "./components/Navbar";
import Reacteroids from './components/Pages/game/src/Reacteroids'
import axios from 'axios';
import './style.css';




class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			username: null
		}

		this.getUser = this.getUser.bind(this)
		this.componentDidMount = this.componentDidMount.bind(this)
		this.updateUser = this.updateUser.bind(this)
	}
	componentDidMount() {
		this.getUser()
	}

	updateUser(userObject) {
		this.setState(userObject)
	}

	getUser() {
		axios.get('/user/').then(response => {
			console.log('Get user response: ')
			console.log(response.data)
			if (response.data.user) {
				console.log('Get User: There is a user saved in the server session: ')

				this.setState({
					loggedIn: true,
					username: response.data.user.username
				})
			} else {
				console.log('Get user: no user');
				this.setState({
					loggedIn: false,
					username: null
				})
			}
		})
	}




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
									{({ match }) => <Home show={match !== null} />}
								</Route>

								<Route path="/game">
									{({ match }) => <Reacteroids show={match !== null} />}
								</Route>
								<Route path="/scores">
									{({ match }) => <Scores show={match !== null} />}
								</Route>
								<Route path="/patch">
									{({ match }) => <Patch show={match !== null} />}
								</Route>
							</div>

						</div>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}

export default App;
