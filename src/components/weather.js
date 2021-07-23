import { useEffect } from "react";
import { connect } from "react-redux";
import { weatherApi } from "../api/api";
import TodaysWeather from "./todaysWeather";
import SixDayWeather from './sixdayweather';

const Weather = ({ getData, state }) => {
  const array = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];

  useEffect(() => {
    fetch(weatherApi("Tbilisi"))
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        getData(data);
      });
  }, [getData]);

  return (
    <>
      <div className="forecast">
        <TodaysWeather state={state} array={array} />
        <SixDayWeather state={state} array={array} />
      </div>
    </>
  );
};

const mapStateToProps = ({ weatherReducer: state }) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => {
      dispatch({ type: "GET_DATA", payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
