import React, { Component } from "react";
import { render } from "react-dom";

class Weather extends Component {
    state = {
        weatherData: null,
        loading: true,
        error: null
    };

    connected() {
        const apiKey = "ea08535e07cb25a1a3a1085d2e91ff84";
        const city = "Erlangen";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${Erlangen}&appid=${ea08535e07cb25a1a3a1085d2e91ff84}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ weatherData: data, loading: false });
            })
            .catch((error) => {
                this.setState({ error, loading: false });
            });
    }
    render() {
        const { weatherData, loading, error } = this.state;

        if (loading) {
            return <div>Loading daten e motit</div>;
        }

        if (error) {
            return <div>Error me daten: {error.message}</div>;
        }

        return (
            <div>
                <h1>Info per motin</h1>
                <p>Temperatura: {weatherData.main.temp}°C</p>
                <p>Description: {weatherData.weather[0].description}</p>
            </div>
        );
    }
}

export default Weather;



/*import React, { useState, useEffect } from "react";
import axios from "axios";

function fetchWeatherData(city) {
  const apiKey = "ea08535e07cb25a1a3a1085d2e91ff84";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  return axios
    .get(apiUrl)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

function WeatherSearch({ onSearch }) {
  const [city, setCity] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(city);
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city..."
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

function WeatherDisplay({ weatherData }) {
  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  return (
    <div>
      <h1>Weather Information</h1>
      <p>Temperature: {kelvinToCelsius(weatherData.main.temp)}°C</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
}

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");

  const handleSearch = () => {
    setLoading(true);

    fetchWeatherData(city)
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    if (city) {
      handleSearch();
    }
  }, [city]);

  return (
    <div>
      <WeatherSearch onSearch={setCity} />
      {loading && <div>Loading weather data...</div>}
      {error && <div>Error: {error.message}</div>}
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default WeatherApp;
