export const formatData = (city) => {
  const { current, location } = city;
  const {
    condition: { icon, text },
    temp_c,
    wind_kph,
    precip_mm,
    humidity,
  } = current;
  const { name: city_name } = location;

  return {
    icon,
    text,
    temp_c,
    wind_kph,
    precip_mm,
    humidity,
    city_name,
  };
};
