import { useEffect } from "react";
import { connect } from "react-redux";
import { weatherApi } from "../api/api";
import TodaysWeather from "./todaysWeather";

const Weather = ({ getData, state }) => {
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
        <TodaysWeather state={state} />
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
