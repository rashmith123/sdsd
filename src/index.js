import React from 'react';
import { render } from 'react-dom';
import Hello from './trial';
import './style.css'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const countries = require("./components/countries.json");
const states = require("./components/states.json");
const cities = require("./components/cities.json");
//const data = {
 // provinces: [
  //  { id: 1, name: 'P1' },
  //  { id: 2, name: 'P2' },
  //  { id: 3, name: 'P3' },
  //  { id: 4, name: 'P4' },
 // ],
 // cities: [
  //  { id: 1, name: 'C1', cityId: 1 },
  //  { id: 2, name: 'C2', cityId: 1 },
  //  { id: 3, name: 'C3', cityId: 1 },
  //  { id: 4, name: 'C4', cityId: 2 },
  //  { id: 5, name: 'C5', cityId: 2 },
    //{ id: 6, name: 'C6', cityId: 3 },
   // { id: 7, name: 'C7', cityId: 4 },
 // ]
//};

class Country extends React.Component {
  onSelect = (event) => {
    this.props.onSelect(parseInt(event.target.value));
  }
  render() {
    return (
      <div id="custom-select-first" >
        <span><h4 id="mystylepro" >Country: </h4></span>
        <select length="5"   onChange={this.onSelect} >
          <option  >Select Country</option>
          {
            this.props.countries.map(counId => (
              <option
                key={counId.id}
                value={counId.id}
                selected={this.props.selectedId === counId.id}>
                {counId.name}
              </option>
            ))
          }
        </select>
      </div>
    );
  }
}

class Province extends React.Component {
  onSelect = (event) => {
    this.props.onSelect(parseInt(event.target.value));
  }
  render() {
    return (
      <div id="custom-select-second">
        <span><h4 id="mystylepro">Province:</h4></span>
        <select onChange={this.onSelect} >
          <option>Select province</option>
          {
            this.props.states.map(prov => (
              <option
                key={prov.id}
                value={prov.id}
                selected={this.props.selectedId === prov.id}>
                {prov.name}
              </option>
            ))
          }
        </select>
      </div>
    );
  }
}

class City extends React.Component {
  onSelect = (event) => {
    this.props.onSelect(parseInt(event.target.value));
  }
  render() {
    return (
      <div id="custom-select-third">
        <span><h4 id="mystylepro" >City:</h4> </span>
        <select onClick={this.onSelect}>
          <option>Select city</option>
          {
            this.props.cities.map(city => (
                <option
                  key={city.id}
                  value={city.id}
                  selected={this.props.selectedId === city.id}>
                  {city.name}
                </option>
            ))
          }
        </select>
      </div>
    );
  }
}


class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: states.stateworld,
      provinceId: null,
      cities: cities.citiesworld,
      cityId: null,
      countries: countries.world,
      id:null,
    };
  }


  onSelectCountry = (counId) => {
    const selProvince = states.stateworld.filter(c => c.provinceId == counId);
    this.setState({
      provinceId: counId,
      states: selProvince
    });
  }


  onSelectProvince = (provId) => {
    const selCities = cities.citiesworld.filter(c => c.cityId == provId);
    this.setState({
      cityId: provId,
      cities: selCities
    });
  }

  onSelectCity = (city) => {
    this.setState({
      cityId: city.id
    });
  }

  render() {
    return (
      <div>
         <Country
          countries={this.state.countries}
          selectedId={this.state.id}
          onSelect={this.onSelectCountry} />
        <Province
          states={this.state.states}
          selectedId={this.state.provinceId}
          onSelect={this.onSelectProvince} />
        <City
          cities={this.state.cities}
          selectedId={this.state.cityId}
          onSelect={this.onSelectCity} />
      </div>
    );
  }
}


const App = () => (
  <div style={styles}>
    <Hello name="Selector" />
    <Address />
  </div>
);

render(<App />, document.getElementById('root'));
