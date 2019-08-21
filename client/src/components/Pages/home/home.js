import React, { Component } from 'react'
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import Login from "../home/components/LogIn";
import SignUp from "../home/components/SignUp";
import { Modal, Button } from 'react-materialize';


const startState = { autoAlpha: 0, y: -50 };

export class Home extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            show: props.show,
            isShowSignup: false,


        }
        

    }
    

    openSignup = event => {
        event.preventDefault()
        this.setState({
            isShowSignup: true
        })
    }

    closeSignup = event => {
        event.preventDefault();
        this.setState({
            isShowSignup: false
        })
    }
    render() {
        return (

            <Transition
                unmountOnExit
                in={this.state.show}
                timeout={1000}
                onEnter={node => TweenMax.set(node, startState)}
                addEndListener={(node, done) => {
                    TweenMax.to(node, 0.5, {
                        autoAlpha: this.state.show ? 1 : 0,
                        y: this.state.show ? 0 : 50,
                        onComplete: done
                    });
                }}
            >
                <div>


                    {/* THIS IS THE CODE IN THE MAIN PANEL */}

                    <div className="wrapper">
                        <section className="hero">
                            <div className="inner">
                                <div className="loginUser">
                                    {this.state.isShowSignup ?
                                        <SignUp closeSignup={this.closeSignup} /> :
                                        <Login openSignup={this.openSignup} updateUser={this.props.updateUser} />
                                    }
                                </div>
                            </div>
                            <div className="playGameLink">
                                <a href="/game" className="playGameLink"><h2>Play Now</h2></a>

                            </div>
                        </section>

                        {/* THIS IS ALL THE CODE IN THE ASIDE */}

                        <section className="siderbar">
                            <div className="inner">
                                <div className="clipper">
                                    <h2>PATCH NOTES:</h2>
                                </div>
                                <div className="anim-panel">
                                    <ul>
                                        <li>Ability to change ship color</li>
                                        <li>Ability to change bullet size</li>
                                        <li>Added shop to purchase different ships</li>
                                    </ul>
                                    <a href="/patch" className="read-btn">CLICK FOR PATCH NOTES</a>
                                </div>
                            </div>
                        </section>
                        <section className="subscribe">
                            <div className="inner">
                                <div className="clipper">
                                    <h2>high scores</h2>
                                </div>

                                <div className="anim-panel">
                                    <div>
                                        <p>high scores</p>
                                    </div>
                                    <button><a href="/scores" className="cta">CLICK FOR HIGH SCORES</a></button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Transition>)
    }
}