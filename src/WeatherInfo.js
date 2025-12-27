export const getWeatherInfo = async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation not supported"));
      }
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const jsonData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=34aa0227b33480606c9386fee4fe94c1&units=metric`)
    if (!jsonData.ok) {
      throw new Error("Weather API error");
    }
    const datos = await jsonData.json();
    return datos;
  } catch (error) {
    console.error("Weather info error:", error);
    return null;
  }
};
