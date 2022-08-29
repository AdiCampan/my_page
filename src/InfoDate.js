import { useEffect, useState } from 'react';
import { getWeatherInfo } from './WeatherInfo';

const InfoDate = () => {
  const [weatherData, setWeatherData] = useState(null);
  const date = new Date().toDateString();
  const [hour,setHour] = useState('');
  
  const temperature =Math.round ( weatherData?.current.temp)
  const weatherIcon = weatherData?.current.weather[0].icon;
  
  
  setInterval(() => {
    let hour = new Date();
    setHour(hour.toLocaleTimeString());
  },1000);

  useEffect(() => {
    getWeatherInfo().then((data) => {

      setWeatherData(data);
    });
  }, []);


  return (
    <>

      <div className='date-box'>
        <div>
          { weatherData && weatherData.timezone}
        </div>
        <div className='hour'>{hour}</div>
        <div className='date'>
          {date}
        </div>
        <div  className='tempearture-box' >
        { temperature + 'ºC'}
        </div>
        <div className='icon-box'>
          <img  className='icon' src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}/>
          <div className='weatherDescription'>
            {weatherData?.current.weather[0].description} 
          </div>
        </div>
        
      </div>
    </>
  )
}

export default InfoDate;