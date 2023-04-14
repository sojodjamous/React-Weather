import React ,{  useState } from 'react';
import './App.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
// import FakeWeatherData from "./data/FakeWeather.json";


const api={
  key:"c3f19f63f38a9055fa6407e35d2e9b1d",
base:"https://api.openweathermap.org/data/2.5/"
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
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>

      <header className="app__header">
      <>
      
      <Navbar  variant="dark"
      className='NAV'>
        <Container>
        <input 
          type="text"
          className="search-bar"
          placeholder="Type in a city name"
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        
        />
          <Nav className="me-auto">
          <button 
          onClick={search}
          className='button'>
        FIND WEATHER
      </button>
        
          </Nav>
        </Container>
      </Navbar>

    
    </>
      </header>

      <main className="app__main">
      {(typeof weather.main != "undefined") ? (
      <div>
        <div className="location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp)}°c
          </div>
          <div className="weather">{weather.weather[0].main}</div>
        </div>
      </div>
      ) : ('')}
      </main>

    </div>
  );
}


export default App;
