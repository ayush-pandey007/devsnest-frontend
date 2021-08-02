export const updateCity = (cityName) => {
  return {
    type: "UPDATE_CITY",
    payload: cityName,
  };
};

export const weatherData = (city) => {
  return {
    type: "UPDATE-WEATHER",
    payload: "data",
  };
};
