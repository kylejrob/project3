import axios from "axios";

const apiKey = "AIzaSyCou1rS_99RZ66HGwHEiHskLF5Oq1di2l0";


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