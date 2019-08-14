import React, { Component } from 'react';
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
            console.log(error)
        })
    }

    render() {
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
                                <li><a className="btn gsap-btn" href="/home" onclick={this.logout}>Log Out</a></li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </div>

        );

    }
}


export default Navbar