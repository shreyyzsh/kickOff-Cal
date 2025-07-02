import axios from "axios";
import { API_HOST, API_KEY, SEASON, LEAGUE } from "../config/config.js";
import { formatData } from "../utils/formatResponse.js";

const options = {
    method: 'GET',
    url: `https://${API_HOST}/v3/fixtures`,
    params: {
        legaue: LEAGUE,
        season: SEASON
    },
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST
    }
};

try {
    const response = await axios.request(options);

    if (!response.data) {
        console.log(`${response.status}, No Data Found.\n`);
    }

    const leagueFixtures = formatData(response.data);

} catch (error) {
    console.error(`Error: ${error.message}`);
}

export default leagueFixtures;