import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
const api = {
  key: "491cd2592a77dc1c50bd9321474f882d",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
   <div className= 'bg-gradient-to-r from-sky-500 to-indigo-700 dark:bg-slate-900'>
     <main>
 <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center md:text-left sm:text-center text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
        Weather App
      </h2>
      <p className="mt-6 max-w-2xl text-xl text-gray-100 text-center md:text-left sm:text-center">
        Welcome to my weather app build with react and openweathermap api...
      </p>

      {/* Tiers */}
      <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-x-8 ">
        
          <div
            
            className="relative p-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl shadow-sm flex flex-col"
          >
            <div className="flex-1">
              
                <p className="absolute top-0 py-1.5 px-4 bg-white rounded-full text-xs font-semibold uppercase tracking-wide text-indigo-600 transform -translate-y-1/2">
                  Weather App
                </p>
              
                <input 
            type="text"
            className="p-4 w-full rounded-xl focus:outline-none"
            placeholder="Search city..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          {(typeof weather.main != "undefined") ? (
            <div>
                <div className="ml-1 text-xl text-white text-center m-5 font-semibold">
                  {weather.name}, {weather.sys.country}
                  </div>
                <div className="ml-1 text-xl text-white text-center font-semibold">
                  {dateBuilder(new Date())}</div>
              
                <div className="text-9xl font-bold text-white text-center">
                {Math.round(weather.main.temp)}°c
                </div>
                {weather.icon}
              <div className="text-white text-center">{weather.weather[0].main}</div>
              
              </div>
            ) : ('')}
            </div>

            
          </div>
       
      </div>
    </div>
    </main>
   </div>
  );
}

export default App;
