import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios'



class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        
        
        return (
            <div>
                <div>

<header>
      <a href="/" className="Logo">PROJECT ASTEROIDS</a>
      <nav>
          <ul>
              <li><a className="btn gsap-btn" href="/">Home</a></li>
              <li><a className="btn gsap-btn" href="/game">Game</a></li>
              <li><a className="btn gsap-btn" href="/scores">High Scores</a></li>
          </ul>
      </nav>
  </header>
            </div>
            </div>

        );

    }
}


export default Navbar