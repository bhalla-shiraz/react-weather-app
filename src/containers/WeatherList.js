import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/googleMap'
class WeatherList extends Component {
  renderWeather(cityData) {
    const name       = cityData.city.name
    const temps      = cityData.list.map(weather => weather.main.temp)
    const pressure   = cityData.list.map(weather => weather.main.pressure)
    const humidity   = cityData.list.map(weather => weather.main.humidity)
   //  const lon        = cityData.city.coord.lon
   //  const lat        = cityData.city.coord.lat
    const { lon, lat } = cityData.city.coord
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <Chart data={temps} color={'red'}/>
        <Chart data={pressure} color={'green'}/>
        <Chart data={humidity} color={'blue'}/>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {(this.props.weather.length) ? this.props.weather.map(this.renderWeather) : ""}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
