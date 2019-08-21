import React from "react";
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";



export default class VideoGrid extends React.Component {

    render() {
        return (
            <>  
                <Grid container spacing={12}>
                    <Grid>
                        
                   <input className="searchBarVideo" type="text" placeholder="Search.."></input>
                        
                       </Grid>
                </Grid>

                    <Grid container spacing={12}>
                            <Grid direction="row" item xs={8}>
                            <Typography><iframe width="600" height="400" src="https://www.youtube.com/embed/bU1QPtOZQZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Typography>
                            </Grid>
                            <Grid direction="row" item xs={4}>
                                <Grid>
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/Hs2LY5NYL0I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </Grid>
                                <Grid>
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/Hs2LY5NYL0I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </Grid>
                                <Grid>
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/Hs2LY5NYL0I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </Grid>
                                 <Grid>
                                 <iframe width="300" height="200" src="https://www.youtube.com/embed/Hs2LY5NYL0I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </Grid>
                            </Grid>
                    </Grid>
                    
                
            </>
        )
    }
};