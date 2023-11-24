import { useState } from "react"

const WeatherCard = ({weather, temp}) => {
  const [changeTemp, setChangeTemp] = useState(true)
  const handleChangeTemp = () => setChangeTemp(!changeTemp)
  
  return (
    <article>
      <h1>Weater App</h1>
      <h2>{weather?.name}, {weather?.sys.country}</h2>
      <section>
        <header>
          <img src="" alt="" />
        </header>
        <article>
          <h3>"{weather?.weather[0].description}"</h3>
          <ul>
            <list>
              <span>Win Speed </span>{weather?.wind.speed} m/s
            </list>
            <list>
              <span>Clouds </span>{weather?.clouds.all} %
            </list>
            <list>
              <span>Pressure </span>{weather?.main.pressure} hPa
            </list>
            <list>
              <span>Humidity </span> {weather?.main.humidity} %
            </list>
          </ul>
        </article>
      </section>
      <h2>{changeTemp? `${temp?.celsius}C` :`${temp?.fahrenheit} °F `}</h2>
      <button onClick={handleChangeTemp}>Change to {changeTemp? `°F`:`°C` }`</button>
    </article>
  )
}

export default WeatherCard