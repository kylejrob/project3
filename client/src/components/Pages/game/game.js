import React from "react";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import { TweenLite } from "gsap/all";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const startState = { autoAlpha: 0, y: -50 };


export const Game = props => <Transition
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
  
	</div>
</Transition>;