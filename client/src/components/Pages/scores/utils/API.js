import axios from "axios";

const apiKey = "AIzaSyD_JTX_wJ4uy_WmMNxsq21dhE0bFkt4hJ0";

export default {
    searchYouTube: function (term) {
        return axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: "snippet",
                q: term,
                type: "video",
                key: apiKey

            }
        })
    }
}