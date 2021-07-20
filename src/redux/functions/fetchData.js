import { weatherApi } from "../../api/api";
import { GET_DATA } from "../action/actions";

export const fetchData = () => {
  async function fetching() {
    const weater = weatherApi("London");
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=900a5f0fabd3b34e08856e8364b353e7`
    );
    const data = await response.json();
    return data;
  }

  return { fetching };
};
