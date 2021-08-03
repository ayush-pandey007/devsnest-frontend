import { getUrl } from "../Utils/getUrl";
import { formatData } from "../Utils/formatData";
export const updateCity = (cityName) => {
  return {
    type: "UPDATE_CITY",
    payload: cityName,
  };
};
export const updateData = (place) => {
  return (dispatch) => {
    fetch(getUrl(place))
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "UPDATE_DATA",
          payload: formatData(data),
        });
      });
  };
};
export const toggleTheme = () => {
  return { type: "TOGGLE_THEME" };
};
