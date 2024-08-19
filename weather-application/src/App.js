import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './App.css';




function App() {
  const tempfull =<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="50px"><path fill='white' d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V112c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z"/></svg>
  const templow =<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="50px"><path fill='white' d="M112 112c0-26.5 21.5-48 48-48s48 21.5 48 48V276.5c0 17.3 7.1 31.9 15.3 42.5C233.8 332.6 240 349.5 240 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5V112zM160 0C98.1 0 48 50.2 48 112V276.5c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C27.2 304.2 16 334.8 16 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6V112C272 50.2 221.9 0 160 0zm0 416a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
  const windspeed =<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="45px"><path fill='white' d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/></svg>
  const humidity =<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="45px"><path fill="white" d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/></svg>
  const feel =<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="45px"><path fill='white'd="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V336c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V32zM240 336a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80 16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48-16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-16 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM240 432a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-48-48a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"/></svg>
const pressure=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="45px"><path fill="white" d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3V88c0-13.3-10.7-24-24-24s-24 10.7-24 24V292.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>



  const api={
    key: "02c2df9d99fa8add8255fc9f0a5a8313",
    base:"https://api.openweathermap.org/data/2.5/",
  }
  const [search,setSearch]=useState("");
  const [weather,setWeather]=useState({});
  const searching=()=>{
  fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
  .then((res)=>res.json())
  .then((result)=>{
    setWeather(result);
    console.log(result);
  });
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <div>
       
        <input className='inp' type='search'
        placeholder='Enter city name'
        onChange={(e)=>setSearch(e.target.value)}
        onKeyPress={searching}
        ></input>
        <button className='buton' onClick={searching}>search</button></div>
        {typeof weather.main!=="undefined"?(
          
        
        
        
         <div className='main'><div className="overlay">                
         <div className='firsthalf'><div className='tem'>{weather.main.temp}°C</div><div className='desc'>{weather.weather[0].description}</div><div className='city'>{weather.name}</div></div>
         <div className='secondhalf'>
           <div className='tiles'><div className='logos'>{windspeed}</div>  <div className='dat'> {weather.wind.speed}</div><p classname="con">Wind speed</p>  </div>
           <div className='tiles'><div className='logos'>{humidity}</div>  <div className='dat'> {weather.main.humidity}</div><p classname="con">humidity</p></div>
           <div className='tiles'><div className='logos'>{templow}</div>  <div className='dat'> {weather.main.temp_min}</div><p classname="con">Min Temp</p></div>
           <div className='tiles'><div className='logos'>{tempfull}</div>  <div className='dat'> {weather.main.temp_max}</div><p classname="con">HighTemp</p></div>
           <div className='tiles'><div className='logos'>{pressure}</div>  <div className='dat'> {weather.main.pressure}</div><p classname="con">Pressure</p></div>
           <div className='tiles'><div className='logos'>{feel}</div>  <div className='dat'> {weather.main.feels_like}</div><p classname="con">FeelsLike</p></div>
         </div></div>
       </div>
        ):(<h3> Search Only For Main Cities</h3>)}
        
         


         
      </header>
    </div>
  );
}

export default App;
