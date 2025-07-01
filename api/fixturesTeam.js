import axios from "axios";
import { FOOTBALL_API_URL, API_KEY, TEAM_ID, SEASON, LEAGUE } from "../config/config.js";

const options = {
    method: 'GET',
    url: `https://${API_HOST}/v3/fixtures`,
    params: {
        team: TEAM_ID,
        season: SEASON
    },
    headers: {
        'x-rapidapi-key': API_KEY,
        "x-rapidapi-host": API_HOST
    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(`Error: ${error.message}`);
}