import React from "react"
import Grid from '@material-ui/core/Grid';


export default class VideoGrid extends React.Component {

    render() {
        return (
            <>
                <div className = "videoBody"><h1>VIDEOS</h1></div>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        video1
                    </Grid>
                    <Grid item xs={12}>
                        video2
                    </Grid>
                    <Grid item xs={12}>
                        video3
                    </Grid>
                    <Grid item xs={12}>
                        video4
                    </Grid>
                  
                </Grid>
            </>
        )
    }
};