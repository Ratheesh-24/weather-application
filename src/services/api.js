import axios from 'axios';

const API_KEY = 'ae500cbd85227b614dd45fae65a4f59a';
const URL = 'http://api.openweathermap.org/data/2.5/weather';


export const getWeather = async(city, country) => {
    const data = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return data;
}