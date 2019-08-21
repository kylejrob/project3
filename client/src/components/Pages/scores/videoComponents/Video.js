import React from "react";
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import SearchBar from "./SearchBar";
import SingleVideo from "./SingleVideo";
import {VideoList,VideoListItem} from "./VideoList"





export default class VideoGrid extends React.Component {

    render() {
        return (
            <>
                <Grid container spacing={12}>
                    <Grid>
                        <SearchBar />
                        {/* <input className="searchBarVideo" type="text" placeholder="Search.."></input> */}

                    </Grid>
              

                <Grid container spacing={12}>
                    <Grid item xs={6}>
                    <Typography><SingleVideo /></Typography>
                        {/* <Typography><iframe width="600" height="400" src="https://www.youtube.com/embed/bU1QPtOZQZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Typography> */}
                    </Grid>
                    <Grid item xs={6}>
                        <Grid>
                        <Typography><VideoList /></Typography>
                            {/* <iframe width="300" height="200" src="https://www.youtube.com/embed/Hs2LY5NYL0I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        </Grid>
                        {/* <Grid>
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
                        </Grid> */}
                    </Grid>
                </Grid>
                  </Grid>


            </>
        )
    }
};