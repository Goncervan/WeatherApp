import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './App.css'
import getWeather from "./actions";

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.weather);
  const [city, setCity] = useState("");

  function handleInputCity(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    dispatch(getWeather(city));
    setCity("");
    console.log(data)
  }


  return (
    <div className="main">
      <div className="container">
        <div className="containerSearch">
          <input
            className="input"
            placeholder="Buscar ciudad..."
            onChange={(e) => handleInputCity(e)}
            value={city}
          />
          <button className="btn" onClick={(e) => handleSearch(e)}>Buscar</button>
        </div>
        <div>
          {typeof data.main === "undefined" ? (
            <div>
              <p>Bienvenidos a mi app del clima!</p>
            </div>
          ) : (
            <div className="data">
              <p className="name">{data?.name}</p>
              <p className="desc">{data?.weather[0].description.charAt(0).toUpperCase() + data?.weather[0].description.slice(1)}</p>
              <img className="icon" alt='icon' src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}></img>
              <p className="temp">{Math.round(data?.main?.temp)} °C</p>
              <div className="minMax">
                <div className="detail">
                  <span className="span">Min</span>
                  <p className="min">{Math.round(data?.main?.temp_min)}°</p>
                </div>
                <div className="detail">
                  <span className="span">Max</span>
                  <p className="max">{Math.round(data?.main?.temp_max)}°</p>
                </div>
              </div>
            </div>
          )
          }
        </div >
      </div >
    </div>
  );
}

export default App;
