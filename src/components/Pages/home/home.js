import React from "react";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import {Link} from "react-router-dom";


const startState = { autoAlpha: 0, y: -50 };

export const Home = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={node => TweenMax.set(node, startState)}
	addEndListener={ (node, done) => {
		TweenMax.to(node, 0.5, {
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
              <li><Link className="btn gsap-btn" to="/home">Home</Link></li>
              <li><Link className="btn gsap-btn" to="/game">Game</Link></li>
              <li><Link className="btn gsap-btn" to="/scores">High Scores</Link></li>
          </ul>
      </nav>
  </header>

{/* THIS IS THE CODE IN THE MAIN PANEL */}

  <div className="wrapper">
      <section className="hero">
          <div className="inner">
              <div className="clipper">
      <h1>PLAYER LOGIN</h1>
          </div>

      <div className="anim-panel">
      <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
		  <Link className="btn gsap-btn read-btn primary" to="/game" onClick="">Create Account</Link>
		  
      </div>
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
</Transition>;