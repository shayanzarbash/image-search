import { useEffect, useState } from "react";

function App() {

  const [loca, setLoca] = useState({});
  const [weather, setWeather] = useState([]);

  const getLocation = async () => {
    const urlIp = 'http://ip-api.com/json/?fields=status,message,country,city,lat,lon,timezone';
    const response = await fetch(urlIp).then((response) => response.json());
    setLoca(response);
    console.log(response);
  }

  const getWeather = async (lat, lon) => {
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f0894defae7c5584798f8812232a40c2`;
    const response = await fetch(urlWeather).then((response) => response.json());
    setWeather(response);
    console.log(response);
    return response;
  }

  useEffect(() => {
    getLocation().then((data) => {
      console.log("data", data);
      getWeather(data.lat, data.lon);
    });
  }, []);

  useEffect(() => {
    getWeather();
  }, []);

  console.log("loca", loca);
  console.log("weather", weather.dt);


  return (
    <>
      <div>
        {loca && loca.country}
      </div>

    </>
  );
}

export default App;
