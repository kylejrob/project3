import React from "react";
import { Transition } from "react-transition-group";
import { TweenLite } from "gsap/all";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
                        <ul>
                            <li>Ability to change ship size</li>
                            <li>Ability to change bullet size</li>
                            <li>Added shop to purchase different ships</li>
                        </ul>
        </Grid>
		<Grid item xs={6}>
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2">Mike Santarelli</Typography>
					<Typography color="textSecondary">
						React Developer
					</Typography>
					<CardActions>
						<Button size="small" href="https://cleve716.github.io/detailed-portfolio/">Portfolio</Button>
					</CardActions>
				</CardContent>
			</Card>
		</Grid>

		<Grid item xs={6}>
			<Card>
				<CardContent>
				<Typography variant="h5" component="h2">Stet Olaye</Typography>
					<Typography color="textSecondary">
						React Developer
					</Typography>
					<CardActions>
						<Button size="small" href="https://solaye.github.io/Updated-Portfolio/">Portfolio</Button>
					</CardActions>
				</CardContent>
			</Card>
		</Grid>

		<Grid item xs={6}>
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2">Kyle Robinson</Typography>
					<Typography color="textSecondary">
						React Developer
					</Typography>
					<CardActions>
						<Button size="small" href="https://kylejrob.github.io/designPortfolio/">Portfolio</Button>
					</CardActions>
				</CardContent>
			</Card>
		</Grid>

		<Grid item xs={6}>
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2">Jeff Fleer</Typography>
					<Typography color="textSecondary">
						React Developer
					</Typography>
					<CardActions>
						<Button size="small" href="https://fleerless.github.io/Responsive-Portfolio/">Portfolio</Button>
					</CardActions>
				</CardContent>
			</Card>
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