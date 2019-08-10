import React, { Component } from 'react'
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import { Link } from "react-router-dom";
import Login from "../home/components/LogIn";
import SignUp from "../home/components/SignUp";
import { homedir } from "os";


const startState = { autoAlpha: 0, y: -50 };
export class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
            show: props.show,
			modalDisplay: false,
			

		}
	
	}
    
    openSignup = event => {
		event.preventDefault()
		this.setState({
			modalDisplay: true
		})
    } 
   render(){
 return(  

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
                    {this.state.modalDisplay ? 
                    <SignUp /> :
                    <Login openSignup={this.openSignup} />}
                </div>
            </section>

            {/* THIS IS ALL THE CODE IN THE ASIDE */}

            <section className="siderbar">
                <div className="inner">
                    <div className="clipper">
                        <h2>Featured</h2>
                    </div>
                    <div className="anim-panel">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit neque quas! Consequuntur exercitationem, aperiam dicta perspiciatis maiores natus dolores fugit distinctio est at sed, officiis libero temporibus odit sequi.</p>
                        <a href="#" className="read-btn">Read more</a>
                    </div>
                </div>
            </section>
            <section className="subscribe">
                <div className="inner">
                    <div className="clipper">
                        <h2>Subscribe</h2>
                    </div>

                    <div className="anim-panel">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ad enim aliquid molestias quia possimus deleniti veniam a fugiat incidunt. Tempore tenetur dignissimos doloremque. Et praesentium accusamus ducimus totam aliquid!</p>
                        <input type="text" name="email" placeholder="Email Address" />
                        <button className="cta">Subscribe Now</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</Transition>)}}

