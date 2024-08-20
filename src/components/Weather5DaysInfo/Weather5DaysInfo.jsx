import './Weather5DaysInfo.css'

function Weather5DaysInfo({ weather5DaysInfo }) {
    let forecastDayli = {} 

    for(let forecast of weather5DaysInfo.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString() //PASSANDO DE DT PARA STRING
        if (!forecastDayli[date]) { // VERFICANDO SE JA TEM UMA DATA NO ARRAY, PARA NAO FICAR DUAS DATAS IGUAIS
            forecastDayli[date] = forecast // COLOCANDO O VALOR DOS PROXIMOS CINCO DIAS EM UM ARRAY
        }
    }

    function convertDateDay(date) { 
        const dateDay = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit'}) //CONVERTENDO A DATA PARA RETORNAR O DIA DA SEMANA E A DATA
        return dateDay
    }
    
    const next5Days = Object.values(forecastDayli).slice(1,6)


    return (
        <div className="weather5DaysBox">
            <h2>Próximos 5 Dias</h2>
            <div className="next5DaysBox">
            {next5Days.map(forecast => (
                <div className='dayliForecast' key={forecast.dt}>
                    <p>{convertDateDay(forecast)}</p>
                    <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt='WeatherImg'/>
                    <p>{Math.round(forecast.main.temp_min)}ºC / {Math.round(forecast.main.temp_max)}ºC</p>
                    <p>{forecast.weather[0].description}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Weather5DaysInfo