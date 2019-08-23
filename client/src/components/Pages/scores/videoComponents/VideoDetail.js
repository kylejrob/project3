import React from "react";

const VideoDetail = ({selectedVideo}) => {
if(!selectedVideo) return <h2>Loading...</h2>
    //console.log(selectedVideo);

const videoId = selectedVideo.id.videoId;
const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
//console.log(videoUrl);


    return (
       <section>
        <iframe className="main-video" title={selectedVideo.snippet.title}src={videoUrl} 
        allowFullScreen></iframe>
        <h3> { selectedVideo.snippet.title}</h3>
        <p>{selectedVideo.snippet.description}</p>
        </section>
    )
}

export default VideoDetail;