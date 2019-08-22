import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import API from "../utils/API"
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import { VideoList, VideoListItem } from "./VideoList";




class VideoGrid extends Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        API.searchYouTube("asteroids video game")
            .then(res => this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] }))
            .catch(err => console.log(err));

    }


onVideoSelect = selectedVideo =>{
this.setState({selectedVideo});
}



    render() {
        return (
            <>
                <Grid container spacing={12}>
                    <Grid>
                        <SearchBar />
                    </Grid>


                    <Grid container spacing={12}>
                        <Grid item xs={6}>
                            <VideoDetail selectedVideo={this.state.selectedVideo} />
                        </Grid>
                        <Grid item xs={6}>
                            <Grid>
                                <VideoList>
                                    {this.state.videos.map(video => (
                                        <VideoListItem 
                                        video={video} 
                                        key={video.id.videoId}
                                        selectedVideo={this.state.selectedVideo}
                                        onVideoSelect={this.onVideoSelect}
                                         />
                                    ))}
                                </VideoList>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </>
        )
    }
};
export default VideoGrid;