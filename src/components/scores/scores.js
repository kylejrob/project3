import React from "react";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import { TweenLite } from "gsap/all";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const startState = { autoAlpha: 0, y: -50 };


export const Scores = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={ node => TweenLite.set(node, startState) }
	addEndListener={ (node, done) => {
		TweenLite.to(node, 0.5, {
			autoAlpha: props.show ? 1 : 0,
			y: props.show ? 0 : 50,
			onComplete: done
		});
	}}

	
>	
<div>
    <header>
      <a href="/" className="Logo">PROJECT3</a>
      <nav>
          <ul>
              <li><Link className="btn gsap-btn" to="/">Home</Link></li>
              <li><Link className="btn gsap-btn" to="/game">Game</Link></li>
              <li><Link className="btn gsap-btn" to="/scores">High Scores</Link></li>
          </ul>
      </nav>
  </header>
	</div>
</Transition>;