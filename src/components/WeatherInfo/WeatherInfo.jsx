
import './WeatherInfo.css'
function WeatherInfo({ weatherInfo }) {
    return (
        <div className="wheaterInfoBox">
            <h1>{weatherInfo.name}</h1>
            <div className="tempBox">
                <img src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`} alt='WeatherImg'/>
                <span>{Math.round(weatherInfo.main.temp)}ºC</span>
            </div>
            <p>{weatherInfo.weather[0].description} </p>
            <div className="infoMain">
                <p>Umidade: {weatherInfo.main.humidity}%</p>
                <p>Sensação térmica: {Math.round(weatherInfo.main.feels_like)}ºC</p>
                <p>Pressão: {weatherInfo.main.pressure}</p>
            </div>
        </div>
    )
}

export default WeatherInfo