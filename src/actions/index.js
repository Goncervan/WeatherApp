import axios from 'axios'
const apiKey = "7dee3f59c8eb96f1fda998e9d18a8fca";

export default function getWeather(city) {
    return async function (dispatch) {
        let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&APPID=${apiKey}`)
        return dispatch({
            type: 'GET_WEATHER',
            payload: result.data
        })
    }
}