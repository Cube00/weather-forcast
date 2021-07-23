const TodaysWeather = ({ state }) => {
  const todayData = new Date().toJSON().slice(0, 10).replace(/-/g, "-");

  if (state) {
    var todaysList = state.data.list.filter((e) => {
      return e.dt_txt.includes(todayData);
    });
    var {
      temp,
      feels_like,
      grnd_level,
      humidity,
      pressure,
      sea_level,
      temp_max,
      temp_min,
    } = todaysList[0].main;
    var { description, main, icon } = todaysList[0].weather[0];
    var { deg, gust, speed } = todaysList[0].wind;
    var image = require(`../assets/icons/${icon}.png`).default;
  }

  //get temperature
  const celsius = temp - 273.15;
  const farenheit = temp * (9 / 5) - 459.67;

  //get week days
  const defaultData = new Date();
  const array = ['Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saturday'];

  const weekDay = array[defaultData.getDay()];

  return (
    <>
      {state && (
        <div className="todays-weather">
          <div className="local-weather">
            <h2 className="heading">LOCAL WEATHER REPORT</h2>
            <div className="weather-opt">
              <div className="weather-first">
                <img className="img-weath" src={image} alt="" />
                <div className="wind">{gust} KM/H</div>
              </div>
              <div className="weather-sec">
                <h2>{main.toUpperCase()}</h2>
                <h3>{weekDay}</h3>
                <div className="temp">
                  <h3>
                    {celsius.toFixed()}
                    <span>o</span> C
                  </h3>
                  <h3>
                    {farenheit.toFixed()}
                    <span>o</span> F
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="sea-forecast-report">
            <h2 className="heading">SEA FORECAST REPORT</h2>
            <div className="lists">
              <div className="temp-cat">
                <span>Feels Like</span>
                <span>{feels_like}</span>
              </div>
              <div className="temp-cat">
                <span>Ground Level</span>
                <span>{grnd_level}</span>
              </div>
              <div className="temp-cat">
                <span>Humidity</span>
                <span>{humidity}</span>
              </div>
              <div className="temp-cat">
                <span>Pressure</span>
                <span>{pressure}</span>
              </div>
              <div className="temp-cat">
                <span>Sea Level</span>
                <span>{sea_level}</span>
              </div>
              <div className="temp-cat">
                <span>Min Temperature</span>
                <span>{temp_min}</span>
              </div>
              <div className="temp-cat">
                <span>Max Temperature</span>
                <span>{temp_max}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodaysWeather;
