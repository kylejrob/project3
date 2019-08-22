import React from "react";
import styled from "styled-components"

const List = styled.ul` 
list-style:none;
padding:0;
`
const ListItem =styled.li`
img{
border:3px solid gray;
border-radius:10px;
cursor:pointer;
:hover{
    border-color:yellow;
}

}
`

const VideoList = ({children}) => {
    return (
     <List>{children}</List>
    )
}



const VideoListItem = ({video,selectedVideo}) => {
    return (
        <ListItem active={video===selectedVideo}>
          <  img src={video.snippet.thumbnails.medium.url}/>
        </ListItem>
    )
}
export{VideoList, VideoListItem};
