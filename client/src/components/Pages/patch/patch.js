import React from "react";
import { Transition } from "react-transition-group";
import { TweenLite } from "gsap/all";



const startState = { autoAlpha: 0, y: -50 };


export const Patch = props => <Transition
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
        <div className="patch">
                        <ul>
                            <li>Ability to change ship size</li>
                            <li>Ability to change bullet size</li>
                            <li>Added shop to purchase different ships</li>
                        </ul>
                        </div>


	</div>
</Transition>;