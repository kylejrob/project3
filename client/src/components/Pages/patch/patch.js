import React from "react";
import { Transition } from "react-transition-group";
import { TweenLite } from "gsap/all";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




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
<body>
<Grid container spacing={1}>
        <Grid item xs={12}>
			<div className="patchNotes">
                        <ul>
                            <li>Brand New Shop! This is our new feature that will allow registerd users to purchase in-game content.</li><br></br>
                            <li>Ability to purchase new color ways for your ship! Three colors available from the store. First purchase is FREE!</li><br></br>
                            <li>Ability to purchase bullet upgrades from the store! Each purchase will increase your bullet size by 2, there is no limit on how many you can buy, only how many you can afford. The first purchase is free, but beware each upgrade is more expensive than the last.</li><br></br>
                        </ul>
						</div>
        </Grid>
		<Grid item xs={6}>
		<div className="teamCards">
			<Card>
				<CardContent>
					<div className="cardNames">
					<Typography variant="h5" component="h2">Mike Santarelli</Typography>
					</div>
					<Typography color="textSecondary">
						React Developer
					</Typography>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nisl pretium fusce id velit ut tortor pretium. Scelerisque in dictum non consectetur a.</p>
					<Typography>
					</Typography>
					<CardActions>
					<div className="portfolioButton">
						<Button size="small" href="https://cleve716.github.io/detailed-portfolio/">Portfolio</Button>
					</div>
					</CardActions>
				</CardContent>
			</Card>
			</div>
		</Grid>

		<Grid item xs={6}>
		<div className="teamCards">
			<Card>
				<CardContent>
				<div className="cardNames">
				<Typography variant="h5" component="h2">Stet Olaye</Typography>
				</div>
					<Typography color="textSecondary">
						React Developer
					</Typography>
					<Typography>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam. Mi quis hendrerit dolor magna eget est lorem ipsum.</p>
					</Typography>
					<CardActions>
					<div className="portfolioButton">
						<Button size="small" href="https://solaye.github.io/Updated-Portfolio/">Portfolio</Button>
					</div>
					</CardActions>
				</CardContent>
			</Card>
			</div>
		</Grid>

		<Grid item xs={6}>
		<div className="teamCards">
			<Card>
				<CardContent>
					<div className="cardNames">
					<Typography variant="h5" component="h2">Kyle Robinson</Typography>
					</div>
					<Typography color="textSecondary">
						React Developer
					</Typography>
					<Typography>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam. Mi quis hendrerit dolor magna eget est lorem ipsum.</p>
					</Typography>
					<CardActions>
						<div className="portfolioButton">
						<Button size="small" href="https://kylejrob.github.io/designPortfolio/">Portfolio</Button>
						</div>
					</CardActions>
				</CardContent>
			</Card>
			</div>
		</Grid>
		
		<Grid item xs={6}>
		<div className="teamCards">
			<Card>
				<CardContent>
				<div className="cardNames">
					<Typography variant="h5" component="h2">Jeff Fleer</Typography>
					</div>
					<Typography color="textSecondary">
						React Developer
					</Typography>
					<Typography>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam. Mi quis hendrerit dolor magna eget est lorem ipsum.</p>
					</Typography>
					<CardActions>
					<div className="portfolioButton">
						<Button size="small" href="https://fleerless.github.io/Responsive-Portfolio/">Portfolio</Button>
					</div>
					</CardActions>
				</CardContent>
			</Card>
			</div>
		</Grid>


		{/* <div className={paper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div> */}


	</Grid>
	</body>
</Transition>;