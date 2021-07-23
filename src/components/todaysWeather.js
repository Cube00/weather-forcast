const TodaysWeather = ({ state, array }) => {
  if(state){
    var {wind_cdir_full, clouds,clouds_low,clouds_mid,high_temp,wind_dir,wind_gust_spd,wind_spd,} = state.data.data[0];
    var {description, icon} = state.data.data[0].weather;
    var image = `${process.env.PUBLIC_URL}/assets/icons/${icon}.png`;
  
    //get temperature
    var farenheit = (high_temp * 1.8) + 32;
  }

  //get week days
  const defaultData = new Date();

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
                <div className="wind">{wind_gust_spd} KM/H</div>
              </div>
              <div className="weather-sec">
                <h3>{weekDay}</h3>
                <h2>{description}</h2>
                <div className="temp cels-far">
                  <h3>
                    {high_temp.toFixed()}
                    <span>o</span> C
                  </h3>
                  <h3>
                    {farenheit.toFixed(1)}
                    <span>o</span> F
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="sea-forecast-report">
            <h2 className="heading">ADDITIONAL FORECAST REPORT</h2>
            <div className="lists">
              <div className="temp-cat">
                <span>CLOUDS</span>
                <span>{clouds}</span>
              </div>
              <div className="temp-cat">
                <span>CLOUDS MID</span>
                <span>{clouds_mid}</span>
              </div>
              <div className="temp-cat">
                <span>CLOUDS LOW</span>
                <span>{clouds_low}</span>
              </div>
              <div className="temp-cat">
                <span>MAX TEMPERATURE</span>
                <span>{high_temp}</span>
              </div>
              <div className="temp-cat">
                <span>WIND</span>
                <span>{wind_dir}</span>
              </div>
              <div className="temp-cat">
                <span>WIND SPEED</span>
                <span>{wind_spd}</span>
              </div>
              <div className="temp-cat">
                <span>WIND DIRECTION</span>
                <span>{wind_cdir_full}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodaysWeather;
