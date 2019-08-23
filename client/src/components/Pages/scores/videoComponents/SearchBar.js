import React, { Component } from "react";



class SearchBar extends Component {
    state = {
        searchTerm: ""

    }

    handleInputChange = event => {
        
        this.setState({ searchTerm: event.target.value });
        
        this.props.searchYouTube(event.target.value);
    }

    render() {
        return (
            <form   className ="searchHolder" onSubmit={event => event.preventDefault() }>
                <label >
                    <input
                  
                        type="text"
                        placeholder="search for Asteroids Versions 1977 -1987"
                        name="youtubeSearch"
                        id="youtubeSearch"
                        value={this.state.searchTerm}
                        onChange={this.handleInputChange}
                    />
                </label>
            </form>
        )
    }
}



export default SearchBar;
