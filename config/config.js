import dotenv from "dotenv";
dotenv.config();

export default {
    API_HOST: "api-football-v1.p.rapidapi.com",
    API_KEY: process.env.API_KEY,
    
    TEAM_ID: "541", // REAL MADRID CF
    LEAGUE: "",
    SEASON: "2025" // CLUB WC INCLUDED
}
